import { ClientsService } from './clients.service';
import { Clients } from './clients.interface';
import { ClientsUpdate } from './clients-update.interface';
export declare class ClientsController {
    private readonly clients;
    constructor(clients: ClientsService);
    cClients(clientsData: Clients): Promise<Clients>;
    listedClients(cpf?: string, name?: string, email?: string): Promise<Clients[]>;
    updateClient(id: string, data: ClientsUpdate): Promise<void>;
}
