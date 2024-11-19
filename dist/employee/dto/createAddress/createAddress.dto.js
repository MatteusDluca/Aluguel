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
exports.createAddressDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const createCep_dto_1 = require("./createCep.dto");
const createstreet_dto_1 = require("./createstreet.dto");
const createCityDto_1 = require("./createCityDto");
const createStateDto_1 = require("./createStateDto");
const createBairroDto_1 = require("./createBairroDto");
class createAddressDto {
}
exports.createAddressDto = createAddressDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createAddressDto.prototype, "num", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], createAddressDto.prototype, "complement", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => createCep_dto_1.createCepDto),
    __metadata("design:type", createCep_dto_1.createCepDto)
], createAddressDto.prototype, "cep", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => createstreet_dto_1.createStreetDto),
    __metadata("design:type", createstreet_dto_1.createStreetDto)
], createAddressDto.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => createCityDto_1.createCityDto),
    __metadata("design:type", createCityDto_1.createCityDto)
], createAddressDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => createStateDto_1.createStateDto),
    __metadata("design:type", createStateDto_1.createStateDto)
], createAddressDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => createBairroDto_1.createBairroDto),
    __metadata("design:type", createBairroDto_1.createBairroDto)
], createAddressDto.prototype, "bairro", void 0);
//# sourceMappingURL=createAddress.dto.js.map