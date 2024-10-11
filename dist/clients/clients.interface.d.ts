export interface Address {
    num: number;
    street: string;
    cep: string;
    complement?: string;
}
export interface Clients {
    name: string;
    cpf: string;
    tel: string;
    email: string;
    address: Address;
}
