import { PrismaType } from '../types/prisma';
import {
  BodyDataRequired
} from '../interfaces/userRegisterBodyData';
import {
  InvalidCPFRepository,
  UserRegisterRepository
} from '../repositories/userRegisterRepository';
import { validateCPF } from './validators/cpf_validate';

export async function userServices ( data: BodyDataRequired, prisma: PrismaType ): Promise<boolean | any> {
  const userRepository = new UserRegisterRepository();
  const invalidCPFRepository = new InvalidCPFRepository();
  const { name, cpf, personType } = data;
  const isValidCPF = await validateCPF( cpf ).then( resolve => resolve );
  if ( isValidCPF ) {
    const user = await userRepository.userCreate( { name, cpf, personType }, prisma );
    return user;
  }
  const invalidCPF = await invalidCPFRepository.invalidCPFCreate( { blockedCPF: cpf }, prisma );
  return isValidCPF;
};