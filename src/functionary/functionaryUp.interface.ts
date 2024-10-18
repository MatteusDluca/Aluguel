import { Prisma, UserRole as PrismaUserRole } from '@prisma/client'

export interface Address {
  num: number
  street: string
  cep: string
  complement?: string
}

export interface iUserUpdate {
  id: string
  name: string
  happyday: string
  tell: number
  cpf: string
  role: PrismaUserRole
  address: Address
}
