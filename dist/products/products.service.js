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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const upsert_helper_1 = require("../common/helpers/upsert.helper");
const console_1 = require("console");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createProducts(data) {
        const color = await (0, upsert_helper_1.createOrUpdate)(this.prisma.color, { color: data.color.color }, { color: data.color.color });
        const image = await (0, upsert_helper_1.createOrUpdate)(this.prisma.image, { image: data.image.image }, { image: data.image.image });
        const status = await (0, upsert_helper_1.createOrUpdate)(this.prisma.status, { status: data.status.status }, { status: data.status.status });
        const rental = await (0, upsert_helper_1.createOrUpdate)(this.prisma.rental, { rental: data.rental.rental }, { rental: data.rental.rental });
        const category = await (0, upsert_helper_1.createOrUpdate)(this.prisma.category, { category: data.category.category }, { category: data.category.category });
        const spent_value = await (0, upsert_helper_1.createOrUpdate)(this.prisma.spentValue, { spent_value: data.spent_value.spent_value }, { spent_value: data.spent_value.spent_value });
        let products = await this.prisma.products.create({
            data: {
                name: data.name,
                code: data.code,
                size: data.size,
                description: data.description,
                amount: data.amount,
                rentalId: rental.id,
                categoryId: category.id,
                imageId: image.id,
                colorId: color.id,
                spent_valueId: spent_value.id,
                statusId: status.id
            }
        });
        return products;
    }
    async updateProducts(id, data) {
        const color = await (0, upsert_helper_1.createOrUpdate)(this.prisma.color, { color: data.color.color }, { color: data.color.color });
        const image = await (0, upsert_helper_1.createOrUpdate)(this.prisma.image, { image: data.image.image }, { image: data.image.image });
        const status = await (0, upsert_helper_1.createOrUpdate)(this.prisma.status, { status: data.status.status }, { status: data.status.status });
        const rental = await (0, upsert_helper_1.createOrUpdate)(this.prisma.rental, { rental: data.rental.rental }, { rental: data.rental.rental });
        const category = await (0, upsert_helper_1.createOrUpdate)(this.prisma.category, { category: data.category.category }, { category: data.category.category });
        const spent_value = await (0, upsert_helper_1.createOrUpdate)(this.prisma.spentValue, { spent_value: data.spent_value.spent_value }, { spent_value: data.spent_value.spent_value });
        const updateProducts = await this.prisma.products.update({
            where: { id },
            data: {
                name: data.name,
                code: data.code,
                size: data.size,
                description: data.description,
                amount: data.amount,
                rentalId: rental.id,
                categoryId: category.id,
                imageId: image.id,
                colorId: color.id,
                spent_valueId: spent_value.id,
                statusId: status.id,
            },
        });
        return updateProducts;
    }
    async findAllProducts() {
        return this.prisma.products.findMany({
            include: {
                rental: true,
                category: true,
                image: true,
                color: true,
                spent_value: true,
                status: true
            }
        });
    }
    async deleteProducts(id) {
        const Products = await this.prisma.products.findUnique({
            where: { id },
        });
        if (!Products) {
            throw new console_1.error('Produto não encontrado');
        }
        const deleteProducts = await this.prisma.products.delete({
            where: { id }
        });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map