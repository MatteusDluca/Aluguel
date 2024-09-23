import { RegisterService } from './register.service';
import { iUser } from './register.interface';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    create(userData: iUser): Promise<{
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
