export interface Address {
  num: number
  street: string
  cep: string
  complement?: string
}

export interface iUser {
  id: string
  name: string
  happyday: string
  tell: number
  cpf: string
  address: Address
  role: string
}
