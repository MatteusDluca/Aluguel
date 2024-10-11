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
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const supabase_service_1 = require("./supabase.service");
let StockService = class StockService {
    constructor(prisma, supabaseService) {
        this.prisma = prisma;
        this.supabaseService = supabaseService;
    }
    async create(stockData, userId, file) {
        let imageUrl = null;
        if (file) {
            imageUrl = await this.supabaseService.uploadImage(file, 'stock-images');
        }
        return await this.prisma.stock.create({
            data: {
                title: stockData.title,
                description: stockData.description,
                size: stockData.size,
                status: stockData.status,
                code: stockData.code,
                imageUrl,
                user: {
                    connect: { id: userId },
                },
            },
        });
    }
    async search(title, code, description) {
        return await this.prisma.stock.findMany({
            where: {
                AND: [
                    title ? { title: { contains: title, mode: 'insensitive' } } : {},
                    code ? { code: { contains: code, mode: 'insensitive' } } : {},
                    description
                        ? { description: { contains: description, mode: 'insensitive' } }
                        : {},
                ],
            },
        });
    }
    async getStock(title, code, description) {
        if (title || code || description) {
            return await this.search(title, code, description);
        }
        return await this.prisma.stock.findMany();
    }
    async dS(id) {
        const itemStock = await this.prisma.stock.findUnique({ where: { id } });
        if (!itemStock) {
            throw new common_1.NotFoundException(`Item com ID ${id} não encontrado`);
        }
        await this.prisma.stock.delete({ where: { id } });
    }
    async upStock(id, updateStock) {
        const stockItem = await this.prisma.stock.findUnique({ where: { id } });
        if (!stockItem) {
            throw new common_1.NotFoundException(`Id ${id} não encontrado`);
        }
        await this.prisma.stock.update({
            where: { id },
            data: updateStock,
        });
    }
};
exports.StockService = StockService;
exports.StockService = StockService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupaBaseService])
], StockService);
//# sourceMappingURL=stock.service.js.map