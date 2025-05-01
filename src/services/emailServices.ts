import { BodyDataRequired } from '../interfaces/userRegisterBodyData';
import { EmailRegisterRepository } from '../repositories/userRegisterRepository';
import { PrismaType } from '../types/prisma';

export async function emailService ( data: BodyDataRequired & { userId: number; }, prisma: PrismaType ) {
  const { email, userId } = data;
  const emailRepository = new EmailRegisterRepository();
  if ( !email || !userId ) { return; }
  emailRepository.emailCreate( { email, usersId: userId }, prisma );
}
