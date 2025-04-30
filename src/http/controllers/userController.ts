import { BodyDataRequired } from '../../interfaces/userRegisterBodyData';
import { Response, Request } from '../../lib/express';
import prisma from '../../lib/prisma';
import { userServices, cnpjServices, phonesService, emailService } from '../../services/userServices';
import { PersonType } from '../enums/personTypeEnum';
import { PhoneType } from '../enums/phoneTypeEnum';

export async function userController ( req: Request, res: Response ): Promise<void> {
  const { cnpj, personType, phoneType, celular, telefone, email }: BodyDataRequired = req.body;

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
    res.status( 400 ).json( { error: " o campo celular esta faltando por favor informe" } );
    return;
  }
  if ( !telefone && phoneType.includes( PhoneType.TELEFONE ) ) {
    res.status( 400 ).json( { error: "o campo telefone esta faltando por favor informe" } );
    return;
  }
  if ( !celular && phoneType.includes( PhoneType.ALL ) || !telefone && phoneType.includes( PhoneType.ALL ) ) {
    res.status( 400 ).json( { error: 'os campos telefone e celualar estam faltando por favor informe' + ` ${phoneType} === ${PhoneType.ALL}` } );
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


  try {
    await prisma.$transaction( async ( prisma ) => {
      const userEntity = await userServices( req.body );

      if ( personType === PersonType.PESSOA_JURIDICA ) {
        await cnpjServices( { ...req.body, userId: userEntity.id } );
      }

      const phoneEntity = await phonesService( { ...req.body, userId: userEntity.id } );
      const emailEntiry = await emailService( { ...req.body, userId: userEntity.id } );

      res.status( 200 ).json( { message: "Successfully data registered!" } );
    } ).then( data => data );
  } catch ( error ) {
    res.status( 500 ).json( { error: "Internal server error", details: error } );
  }
}
