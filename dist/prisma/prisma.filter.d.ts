import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Prisma } from '@prisma/client';
export declare class PrismaFilter implements ExceptionFilter {
    private handleUniqueConstraintError;
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): void;
}
