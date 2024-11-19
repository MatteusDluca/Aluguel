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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductsDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const createRental_dto_1 = require("./createRental.dto");
const createCategory_dto_1 = require("./createCategory.dto");
const createImage_dto_1 = require("./createImage.dto");
const createColor_dto_1 = require("./createColor.dto");
const createSpentValue_dto_1 = require("./createSpentValue.dto");
const createStatus_dto_1 = require("./createStatus.dto");
class updateProductsDto {
}
exports.updateProductsDto = updateProductsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], updateProductsDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], updateProductsDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], updateProductsDto.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], updateProductsDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], updateProductsDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => createRental_dto_1.createRentalDto),
    __metadata("design:type", createRental_dto_1.createRentalDto)
], updateProductsDto.prototype, "rental", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => createCategory_dto_1.createCategoryDto),
    __metadata("design:type", createCategory_dto_1.createCategoryDto)
], updateProductsDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => createImage_dto_1.createImageDto),
    __metadata("design:type", createImage_dto_1.createImageDto)
], updateProductsDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => createColor_dto_1.createColorDto),
    __metadata("design:type", createColor_dto_1.createColorDto)
], updateProductsDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => createSpentValue_dto_1.createSpentValueDto),
    __metadata("design:type", createSpentValue_dto_1.createSpentValueDto)
], updateProductsDto.prototype, "spent_value", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => createStatus_dto_1.createStatusDto),
    __metadata("design:type", createStatus_dto_1.createStatusDto)
], updateProductsDto.prototype, "status", void 0);
//# sourceMappingURL=updateProducts.dto.js.map