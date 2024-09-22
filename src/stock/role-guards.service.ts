import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Injectable()
export class RoleGuards implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const user = request.user

    const roles = this.reflector.get<string[]>('roles', context.getHandler())

    if (!user || !roles.includes(user.role)) {
      throw new ForbiddenException(
        'Você não tem permissão para acessar essa rota',
      )
    }
    return true
  }
}
