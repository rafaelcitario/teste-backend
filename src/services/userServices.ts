import { PhoneType } from '../generated/prisma';
import { BodyDataRequired } from '../interfaces/userRegisterBodyData';
import { CnpjRegisterRepository, CnpjUsersRegisterRepository, emailRegisterRepository as EmailRegisterRepository, PhoneRegisterRepository, UserRegisterRepository } from '../repositories/userRegisterRepository';

export async function userServices ( data: BodyDataRequired ) {
  const userRepository = new UserRegisterRepository();
  const { name, cpf, personType } = data;
  const user = await userRepository.userCreate( { name, cpf, personType } );
  return user;
}


export async function cnpjServices ( data: BodyDataRequired & { userId: number; } ) {
  const cnpjRepository = new CnpjRegisterRepository();
  const cnpjUsersRepository = new CnpjUsersRegisterRepository();
  const { cnpj, userId } = data;
  const cnpjEntity = await cnpjRepository.cnpjCreate( { cnpj } );
  await cnpjUsersRepository.cnpjUserCreate( {
    usersId: userId,
    cnpjsId: cnpjEntity.id,
  } );
}

export async function phonesService ( data: BodyDataRequired & { userId: number; } ) {
  const phonesRepository = new PhoneRegisterRepository();
  const { celular, telefone, phoneType, userId } = data;

  const dataFilter: string[] = [];
  if ( celular ) dataFilter.push( celular );
  if ( telefone ) dataFilter.push( telefone );

  await Promise.all( dataFilter.map( async phone => {
    if ( !phone ) throw new Error( "Número inválido." );
    await phonesRepository.phoneCreate( { number: phone, phoneType, usersId: userId } );
  } ) );
}


export async function emailService ( data: BodyDataRequired & { userId: number; } ) {
  const { email, userId } = data;
  const emailRepository = new EmailRegisterRepository();
  if ( !email || !userId ) throw new Error;
  emailRepository.emailCreate( { email, usersId: userId } );
}