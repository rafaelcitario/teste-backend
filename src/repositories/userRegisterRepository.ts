import { PrismaType } from '../types/prisma';
import { CreateUserDTO, CreateInvalidCPFDTO, CreateCnpjDTO, CreateUserCnpjDTO, CreatePhoneDTO, CreateEmailDTO, CreateAddressDTO } from '../types/dto';

export class UserRegisterRepository {
  public async userCreate ( data: CreateUserDTO, prisma: PrismaType ) {
    return await prisma.users.create( {
      data,
    } );
  }
}

export class InvalidCPFRepository {
  public async invalidCPFCreate ( data: CreateInvalidCPFDTO, prisma: PrismaType ) {
    return await prisma.bloquedCPFs.create( {
      data,
    } );
  }
}

export class CnpjRegisterRepository {
  public async cnpjCreate ( data: CreateCnpjDTO, prisma: PrismaType ) {
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
  public async cnpjUserCreate ( data: CreateUserCnpjDTO, prisma: PrismaType ) {
    return await prisma.users_cnpjs.create( {
      data,
    } );
  }
}

export class PhoneRegisterRepository {
  public async phoneCreate ( data: CreatePhoneDTO, prisma: PrismaType ) {
    return await prisma.phones.create( {
      data,
    } );
  }
}

export class EmailRegisterRepository {
  public async emailCreate ( data: CreateEmailDTO, prisma: PrismaType ) {
    return await prisma.emails.create( {
      data,
    } );
  }
}

export class AddressRegisterRepository {
  public async addressCreate ( data: CreateAddressDTO, prisma: PrismaType ) {
    return await prisma.address.create( {
      data,
    } );
  }
}

