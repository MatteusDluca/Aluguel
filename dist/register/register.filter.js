"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterFilter = void 0;
const common_1 = require("@nestjs/common");
let RegisterFilter = class RegisterFilter {
    catch(exception, host) {
        console.log('Erro prisma', exception);
        const context = host.switchToHttp();
        const response = context.getResponse();
        const status = common_1.HttpStatus.CONFLICT;
        let message = 'Um erro inesperado';
        switch (exception.code) {
            case 'P2002':
                {
                    const field = exception.meta?.target[0];
                    if (field === 'cpf') {
                        message = 'Este CPF já existe';
                    }
                    else if (field === 'tell') {
                        message = 'Este número de telefone já esta em uso';
                    }
                }
                break;
        }
        response.status(status).json({
            statusCode: status,
            message: message,
        });
    }
};
exports.RegisterFilter = RegisterFilter;
exports.RegisterFilter = RegisterFilter = __decorate([
    (0, common_1.Catch)()
], RegisterFilter);
//# sourceMappingURL=register.filter.js.map