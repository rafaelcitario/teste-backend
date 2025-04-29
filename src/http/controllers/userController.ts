import { BodyDataRequired } from '../../interfaces/userRegisterBodyData';
import { Response, Request, express } from '../../lib/express';
import { userServices } from '../../services/userServices';
import { PersonType } from '../enums/personTypeEnum';
import { PhoneType } from '../enums/phoneTypeEnum';



export async function userController ( req: Request, res: Response ): Promise<void> {
  const { cnpj, personType, phoneType, celular, telefone }: BodyDataRequired = req.body;
  const validPersonType = [PersonType.PESSOA_FISICA, PersonType.PESSOA_JURIDICA];
  if ( !validPersonType.includes( personType ) ) {
    res.status( 400 ).json( { error: "PersonType field is invalid, must be 'fisica' or 'juridica'" } );
    return;
  }

  const validPhoneType = [PhoneType.CELULAR, PhoneType.TELEFONE];
  if ( !validPhoneType.includes( phoneType ) ) {
    res.status( 400 ).json( { error: "Phone type field is invalid, must be 'celular' or 'telefone'" } );
    return;
  }

  if ( personType.includes( PersonType.PESSOA_JURIDICA ) && !cnpj ) {
    res.status( 400 ).json( { error: { code: "CNPJ IS REQUIRED!", message: "CNPJ must be provided when registering as a legal entity." } } );
    return;
  }

  userServices( req.body );
  res.status( 200 ).json( { message: "Successfully data registered!" } );
  return;
}