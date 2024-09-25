import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthHeaderMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Verifique a lógica para adicionar o cabeçalho Authorization
    // Aqui, como exemplo, adicionamos um cabeçalho fictício
    if (req.url.startsWith('/stock')) { // Apenas rotas que começam com /stock
      req.headers['authorization'] = 'Bearer seu_token_aqui'; // Adicione seu token dinâmico se necessário
    }
    
    next(); // Chama o próximo middleware ou controlador
  }
}