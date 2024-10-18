"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<<< HEAD:dist/clients/clients.module.js
exports.ClientsModule = void 0;
const common_1 = require("@nestjs/common");
const clients_controller_1 = require("./clients.controller");
const clients_service_1 = require("./clients.service");
const prisma_service_1 = require("../prisma/prisma.service");
let ClientsModule = class ClientsModule {
};
exports.ClientsModule = ClientsModule;
exports.ClientsModule = ClientsModule = __decorate([
    (0, common_1.Module)({
        controllers: [clients_controller_1.ClientsController],
        providers: [clients_service_1.ClientsService, prisma_service_1.PrismaService],
    })
], ClientsModule);
//# sourceMappingURL=clients.module.js.map
========
exports.FunctionaryFilter = void 0;
const common_1 = require("@nestjs/common");
let FunctionaryFilter = class FunctionaryFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        const status = common_1.HttpStatus.CONFLICT;
        response.status(status).json({
            statusCode: status,
            message: exception.message
        });
    }
};
exports.FunctionaryFilter = FunctionaryFilter;
exports.FunctionaryFilter = FunctionaryFilter = __decorate([
    (0, common_1.Catch)()
], FunctionaryFilter);
//# sourceMappingURL=functionary.filter.js.map
>>>>>>>> master:dist/functionary/functionary.filter.js
