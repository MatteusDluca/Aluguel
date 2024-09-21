import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import type { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
export declare class RegisterFilter implements ExceptionFilter {
    catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost): void;
}
