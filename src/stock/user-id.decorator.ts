import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest()
    const user = request.user // O `user` está presente se você estiver usando `JwtAuthGuard`
    return user?.sub // Retorna o ID do usuário (normalmente armazenado no campo `sub` do token JWT)
  },
)
