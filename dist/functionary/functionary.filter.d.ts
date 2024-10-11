import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { PrismaClientUnknownRequestError } from '@prisma/client/runtime/library';
export declare class FunctionaryFilter implements ExceptionFilter {
    catch(exception: PrismaClientUnknownRequestError, host: ArgumentsHost): void;
}
