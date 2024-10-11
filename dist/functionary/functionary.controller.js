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
exports.FunctionaryController = void 0;
const common_1 = require("@nestjs/common");
const functionary_service_1 = require("./functionary.service");
const functionary_filter_1 = require("./functionary.filter");
let FunctionaryController = class FunctionaryController {
    constructor(functionaryService) {
        this.functionaryService = functionaryService;
    }
    async showUser() {
        return this.functionaryService.showUsers();
    }
    async register(userData) {
        return this.functionaryService.newUser(userData);
    }
    async up(id, update) {
        return this.functionaryService.patchFunctionary(id, update);
    }
};
exports.FunctionaryController = FunctionaryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FunctionaryController.prototype, "showUser", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseFilters)(functionary_filter_1.FunctionaryFilter),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FunctionaryController.prototype, "register", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FunctionaryController.prototype, "up", null);
exports.FunctionaryController = FunctionaryController = __decorate([
    (0, common_1.Controller)('functionary'),
    __metadata("design:paramtypes", [functionary_service_1.FunctionaryService])
], FunctionaryController);
//# sourceMappingURL=functionary.controller.js.map