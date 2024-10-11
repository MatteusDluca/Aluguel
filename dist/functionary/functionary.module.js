"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionaryModule = void 0;
const common_1 = require("@nestjs/common");
const functionary_service_1 = require("./functionary.service");
const functionary_controller_1 = require("./functionary.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const functionary_middleware_1 = require("./functionary.middleware");
let FunctionaryModule = class FunctionaryModule {
    configure(consumer) {
        consumer.apply(functionary_middleware_1.functionaryMiddleware).forRoutes('functionary');
    }
};
exports.FunctionaryModule = FunctionaryModule;
exports.FunctionaryModule = FunctionaryModule = __decorate([
    (0, common_1.Module)({
        providers: [functionary_service_1.FunctionaryService, prisma_service_1.PrismaService],
        controllers: [functionary_controller_1.FunctionaryController]
    })
], FunctionaryModule);
//# sourceMappingURL=functionary.module.js.map