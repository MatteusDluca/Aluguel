"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockModule = void 0;
const common_1 = require("@nestjs/common");
const stock_service_1 = require("./stock.service");
const stock_controller_1 = require("./stock.controller");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_guard_1 = require("../auth/jwt.guard");
const stock_middleware_1 = require("./stock.middleware");
let StockModule = class StockModule {
    configure(consumer) {
        consumer.apply(stock_middleware_1.AuthHeaderMiddleware).forRoutes(stock_controller_1.StockController);
    }
};
exports.StockModule = StockModule;
exports.StockModule = StockModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '1h' },
            }),
        ],
        providers: [stock_service_1.StockService, prisma_service_1.PrismaService, jwt_guard_1.JwtAuthGuard],
        controllers: [stock_controller_1.StockController],
    })
], StockModule);
//# sourceMappingURL=stock.module.js.map