import { BodyDataRequired } from '../interfaces/userRegisterBodyData';
import { EmailRegisterRepository } from '../repositories/userRegisterRepository';
import { PrismaType } from '../types/prisma';

export async function emailService ( data: BodyDataRequired & { userId: number; }, prisma: PrismaType ) {
  const { email, userId } = data;
  const emailRepository = new EmailRegisterRepository();
  if ( !email || !userId ) { throw { code: "whoooo!", message: "e-mail is empty" }; }
  emailRepository.emailCreate( { email, usersId: userId }, prisma );
}
