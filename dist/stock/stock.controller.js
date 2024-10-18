"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../auth/jwt.guard");
const role_guards_service_1 = require("./role-guards.service");
const roles_decorator_1 = require("./roles.decorator");
const stock_service_1 = require("./stock.service");
const stockDTO_1 = require("./stockDTO");
const platform_express_1 = require("@nestjs/platform-express");
<<<<<<< HEAD
const user_id_decorator_1 = require("./user-id.decorator");
=======
>>>>>>> master
let StockController = class StockController {
    constructor(stockService) {
        this.stockService = stockService;
    }
    create(createStock, file, req) {
        const userId = req.user.id;
        return this.stockService.create(createStock, userId, file);
    }
    async uploadImage(file, userId) {
        if (!file) {
            throw new Error('Nenhum arquivo foi enviado');
        }
        const imageUrl = await this.stockService.uploadImage(file, userId);
        return { imageUrl };
    }
    gtFind(title, code, description) {
        return this.stockService.getStock(title, code, description);
    }
    async dStock(id) {
        await this.stockService.dS(id);
    }
    async update(id, updateStock) {
        return this.stockService.upStock(id, updateStock);
    }
};
exports.StockController = StockController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('Admin', 'User'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stockDTO_1.StockDTO, Object, Object]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/image'),
    (0, roles_decorator_1.Roles)('Admin', 'User'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('Admin', 'User'),
    __param(0, (0, common_1.Query)('title')),
    __param(1, (0, common_1.Query)('code')),
    __param(2, (0, common_1.Query)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "gtFind", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'User'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "dStock", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'User'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "update", null);
exports.StockController = StockController = __decorate([
    (0, common_1.Controller)('stock'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_guards_service_1.RoleGuards),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], StockController);
//# sourceMappingURL=stock.controller.js.map