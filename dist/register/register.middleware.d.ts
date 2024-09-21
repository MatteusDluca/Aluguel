import { NestMiddleware } from '@nestjs/common';
import type { Request, Response } from 'express';
export declare class RegisterMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void): void;
}
