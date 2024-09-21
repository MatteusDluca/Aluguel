import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginData: {
        cpf: string;
        happyday: string;
    }): Promise<{
        access_token: string;
    }>;
    protectedRoute(): Promise<{
        message: string;
    }>;
}
