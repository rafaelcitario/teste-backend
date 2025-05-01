import { BodyDataRequired } from '../../interfaces/userRegisterBodyData';
import { Response, Request } from '../../lib/express';
import prisma from '../../lib/prisma';
import { addressService } from '../../services/addressServices';
import { cnpjServices } from '../../services/cnpjServices';
import { emailService } from '../../services/emailServices';
import { phonesService } from '../../services/phoneServices';
import { userServices } from '../../services/userServices';
import { PersonType } from '../enums/personTypeEnum';
import { PhoneType } from '../enums/phoneTypeEnum';

export async function userController ( req: Request, res: Response ): Promise<void> {
  const { cnpj, personType, phoneType, celular, telefone, email, cep }: BodyDataRequired = req.body;

  const validPersonType = [PersonType.PESSOA_FISICA, PersonType.PESSOA_JURIDICA];
  if ( !validPersonType.includes( personType ) ) {
    res.status( 400 ).json( { error: "PersonType field is invalid, must be 'fisica' or 'juridica'" } );
    return;
  }

  const validPhoneType = [PhoneType.CELULAR, PhoneType.TELEFONE, PhoneType.ALL];
  if ( !validPhoneType.includes( phoneType ) ) {
    res.status( 400 ).json( { error: "Phone type field is invalid, must be 'celular','telefone' or 'ambos'" } );
    return;
  }

  if ( !celular && phoneType.includes( PhoneType.CELULAR ) ) {
    res.status( 400 ).json( { error: "The 'celular' field is missing, please provide it." } );
    return;
  }

  if ( !telefone && phoneType.includes( PhoneType.TELEFONE ) ) {
    res.status( 400 ).json( { error: "The 'telefone' field is missing, please provide it." } );
    return;
  }

  if ( !celular && phoneType.includes( PhoneType.ALL ) || !telefone && phoneType.includes( PhoneType.ALL )
  ) {
    res.status( 400 ).json( { error: "Both 'telefone' and 'celular' fields are missing, please provide them." } );
    return;
  }
  if ( personType === PersonType.PESSOA_JURIDICA && !cnpj ) {
    res.status( 400 ).json( {
      error: {
        code: "CNPJ IS REQUIRED!",
        message: "CNPJ must be provided when registering as a legal entity.",
      },
    } );
    return;
  }

  if ( !/^\d{8}$/.test( cep ) ) {
    res.status( 400 ).json( {
      error: {
        code: "CEP invalid",
        message: "Invalid CEP! The CEP must contain exactly 8 numeric characters.",
      },
    } );
    return;
  }

  try {
    await prisma.$transaction( async ( prisma ) => {
      let userEntity = await userServices( req.body, prisma );
      if ( !userEntity ) {
        throw { status: 400, error: { code: 'CPF Invalid', message: 'Invalid CPF!' } };
      }

      if ( personType === PersonType.PESSOA_JURIDICA ) {
        const cnpjEntity = await cnpjServices( { ...req.body, userId: userEntity.id }, prisma );
        if ( !cnpjEntity ) {
          throw { status: 400, error: { code: "CNPJ Invalid", message: "Invalid CNPJ! The CNPJ must be a valid document." } };
          return;
        }
      }

      const phoneEntity = await phonesService( { ...req.body, userId: userEntity.id }, prisma );
      const emailEntity = await emailService( { ...req.body, userId: userEntity.id }, prisma );
      const addressEntity = await addressService( { ...req.body, userId: userEntity.id }, prisma );
    } );
    res.status( 200 ).json( { message: "Successfully data registered!" } );
  } catch ( e: any ) {
    if ( e.status ) {
      res.status( e.status ).json( { error: e.error } );
    } else {
      res.status( 500 ).json( { error: "Internal server error", details: e } );
    }
  }
}
