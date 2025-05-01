import { BodyDataRequired } from '../interfaces/userRegisterBodyData';
import { PhoneRegisterRepository } from '../repositories/userRegisterRepository';
import { PrismaType } from '../types/prisma';

export async function phonesService ( data: BodyDataRequired & { userId: number; }, prisma: PrismaType ) {
  const phonesRepository = new PhoneRegisterRepository();
  const { celular, telefone, phoneType, userId } = data;

  const dataFilter: string[] = [];
  if ( celular ) dataFilter.push( celular );
  if ( telefone ) dataFilter.push( telefone );

  await Promise.all( dataFilter.map( async phone => {
    if ( !phone ) { return; }
    await phonesRepository.phoneCreate( { number: phone, phoneType, usersId: userId }, prisma );
  } ) );
}