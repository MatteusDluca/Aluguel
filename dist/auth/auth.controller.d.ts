import { AuthService } from './auth.service';
import type { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginData: {
        cpf: string;
        happyday: string;
    }, res: Response): Promise<Response<any, Record<string, any>>>;
}
