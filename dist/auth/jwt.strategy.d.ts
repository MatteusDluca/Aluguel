import { PrismaService } from 'src/prisma/prisma.service';
import { JwtPayload } from './auth.interface';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly prisma;
    constructor(prisma: PrismaService);
    validate(payload: JwtPayload): Promise<{
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
export {};
