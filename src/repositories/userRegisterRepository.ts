import prisma from '../lib/prisma';
import { PersonType } from '../http/enums/personTypeEnum';
import { PhoneType } from '../generated/prisma';

type CreateUserDTO = {
  name: string;
  cpf: string;
  personType: PersonType;
};

type CreateCnpjDTO = {
  cnpj?: string;
};

type CreateUserCnpjDTO = {
  usersId: number;
  cnpjsId: number;
};

type CreatePhoneDTO = {
  number: string;
  phoneType: PhoneType;
  usersId: number;
};

type CreateEmailDTO = {
  email: string,
  usersId: number;
};

export class UserRegisterRepository {
  public async userCreate ( data: CreateUserDTO ) {
    return await prisma.users.create( {
      data,
    } );
  }
}

export class CnpjRegisterRepository {
  public async cnpjCreate ( data: CreateCnpjDTO ) {
    const { cnpj } = data;

    if ( !cnpj ) {
      throw new Error( "CNPJ is empty" );
    }

    return await prisma.cnpjs.create( {
      data: { cnpj },
    } );
  }
}


export class CnpjUsersRegisterRepository {
  public async cnpjUserCreate ( data: CreateUserCnpjDTO ) {
    return await prisma.user_cnpjs.create( {
      data,
    } );
  }
}

export class PhoneRegisterRepository {
  public async phoneCreate ( data: CreatePhoneDTO ) {
    return await prisma.phones.create( {
      data,
    } );
  }
}

export class emailRegisterRepository {
  public async emailCreate ( data: CreateEmailDTO ) {
    return await prisma.emails.create( {
      data,
    } );
  }
}
