import { ClientsService } from './clients.service';
import { Clients } from './clients.interface';
import { ClientsUpdate } from './clients-update.interface';
export declare class ClientsController {
    private readonly clients;
    constructor(clients: ClientsService);
    cClients(clientsData: Clients): Promise<Clients>;
    listedClients(): Promise<{
        id: string;
        name: string;
        cpf: string;
        tel: string;
        email: string;
        addressId: string;
    }[]>;
    updateClient(id: string, data: ClientsUpdate): Promise<void>;
}
