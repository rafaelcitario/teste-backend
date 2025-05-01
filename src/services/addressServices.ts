import { BodyDataRequired } from '../interfaces/userRegisterBodyData';
import { AddressRegisterRepository } from '../repositories/userRegisterRepository';
import { PrismaType } from '../types/prisma';

export async function addressService ( data: BodyDataRequired & { userId: number; }, prisma: PrismaType ) {
  if ( !data.cep || !data.street || !data.number || !data.complement || !data.city || !data.district || !data.state ) {
    throw { code: "Address is Invalide", message: "Some addres informations is wrong or empty!" };
    return;
  }
  const addressRepository = new AddressRegisterRepository();
  const cleanedData = Object.entries( data ).reduce( ( acc, [key, value] ) => {
    return {
      ...acc,
      [key]: value = typeof value === 'string' ? value.trim() : value
    };
  }, {} as BodyDataRequired & { userId: number; } );
  if ( /^\d{8}$/.test( cleanedData.cep ) ) {
    return;
  }
  const { cep, street, number, complement, city, district, state, userId } = cleanedData;
  addressRepository.addressCreate( { cep, street, number, complement, city, district, state, usersId: userId }, prisma );
}