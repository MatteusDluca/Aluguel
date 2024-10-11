import { PrismaService } from 'src/prisma/prisma.service';
import { iUser } from 'src/register/register.interface';
import { iUserUpdate } from './functionaryupdate.interface';
export declare class FunctionaryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    showUsers(): Promise<{
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
    newUser(userData: iUser): Promise<{
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
    patchFunctionary(id: string, fnUpdate: iUserUpdate): Promise<void>;
}
