"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaFilter = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let PrismaFilter = class PrismaFilter {
    handleUniqueConstraintError(exception) {
        const target = exception.meta?.target;
        if (Array.isArray(target) && target.includes('email')) {
            return 'E-mail já cadastrado. Por favor, use outro e-mail.';
        }
        if (Array.isArray(target) && target.includes('cpf')) {
            return 'CPF já cadastrado. Verifique os dados.';
        }
        if (Array.isArray(target) && target.includes('username')) {
            return 'Nome de usuário já está em uso. Escolha outro nome.';
        }
        return 'Violação de chave única. Já existe um registro com os dados fornecidos.';
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let statusCode;
        let message;
        switch (exception.code) {
            case 'P2002':
                statusCode = common_1.HttpStatus.CONFLICT;
                message = this.handleUniqueConstraintError(exception);
                break;
            case 'P2025':
                statusCode = common_1.HttpStatus.NOT_FOUND;
                message = 'Não foi possível localizar. Verifique os dados fornecidos';
                break;
            default:
                statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
                message = 'Desculpe, estamos resolvendo. Logo estará pronto';
                break;
        }
        response.status(statusCode).json({
            statusCode,
            timestamp: new Date().toISOString(),
            path: request.url,
            error: message,
        });
    }
};
exports.PrismaFilter = PrismaFilter;
exports.PrismaFilter = PrismaFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError)
], PrismaFilter);
//# sourceMappingURL=prisma.filter.js.map