import { PrismaService } from 'src/prisma/prisma.service';
import { iUser } from './register.interface';
export declare class RegisterService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    newUser(userData: iUser): Promise<{
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
    getUser(): Promise<iUser[]>;
}
