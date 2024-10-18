import { FunctionaryService } from './functionary.service';
import { iUser } from './functionary.interface';
import { iUserUpdate } from './functionaryUp.interface';
export declare class FunctionaryController {
    private readonly functionaryService;
    constructor(functionaryService: FunctionaryService);
    showUser(): Promise<{
        id: string;
        name: string;
        cpf: string;
        happyday: string;
        tell: number;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
        addressId: string;
    }[]>;
    register(userData: iUser): Promise<iUser>;
    up(id: string, update: iUserUpdate): Promise<{
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
        happyday: string;
        tell: number;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
        addressId: string;
    }>;
}
