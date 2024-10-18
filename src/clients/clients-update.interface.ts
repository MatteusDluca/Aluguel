import { Prisma } from '@prisma/client'

export interface Address {
  num: number
  street: string
  cep: string
  complement?: string
}

export interface ClientsUpdate {
  name: string
  cpf: string
  tel: string
  email: string
  address: Prisma.AddressUpdateOneRequiredWithoutUserNestedInput
}
