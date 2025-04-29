import { PersonType } from '../http/enums/personTypeEnum';
import { PhoneType } from '../http/enums/phoneTypeEnum';

export interface BodyDataRequired {
  cnpj?: string,
  cpf: string,
  name: string,
  personType: PersonType,
  celular?: string,
  telefone?: string,
  phoneType: PhoneType,
  email: string,
  cep: string,
  street: string,
  number: number,
  complement: string,
  city: string,
  district: string,
  state: string,
}