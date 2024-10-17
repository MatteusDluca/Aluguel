import { PrismaService } from 'src/prisma/prisma.service';
import { Clients } from './clients.interface';
import { ClientsUpdate } from './clients-update.interface';
export declare class ClientsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createClient(clientData: Clients): Promise<{
        address: {
            id: string;
            num: number;
            street: string;
            cep: string;
            complement: string | null;
        };
    } & {
        id: string;
        name: string;
        cpf: string;
        tel: string;
        email: string;
        addressId: string;
    }>;
    listedClients(): Promise<{
        id: string;
        name: string;
        cpf: string;
        tel: string;
        email: string;
        addressId: string;
    }[]>;
    patchClients(id: string, clientsint: ClientsUpdate): Promise<void>;
}