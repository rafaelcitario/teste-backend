import { BodyDataRequired } from '../interfaces/userRegisterBodyData';
import { CnpjRegisterRepository, CnpjUsersRegisterRepository } from '../repositories/userRegisterRepository';
import { PrismaType } from '../types/prisma';
import { validateCNPJ } from './validators/cnpj_validate';

export async function cnpjServices ( data: BodyDataRequired & { userId: number; }, prisma: PrismaType ): Promise<boolean> {
  const cnpjRepository = new CnpjRegisterRepository();
  const cnpjUsersRepository = new CnpjUsersRegisterRepository();
  const { cnpj, userId } = data;
  if ( !cnpj ) { return false; }
  const isValidCNPJ = await validateCNPJ( cnpj ).then( resolve => resolve );
  if ( isValidCNPJ ) {
    const cnpjEntity = await cnpjRepository.cnpjCreate( { cnpj }, prisma );
    await cnpjUsersRepository.cnpjUserCreate( {
      usersId: userId,
      cnpjsId: cnpjEntity.id,
    }, prisma );
    return isValidCNPJ;
  }
  return isValidCNPJ;
}
