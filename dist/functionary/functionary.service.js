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
exports.FunctionaryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FunctionaryService = class FunctionaryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async showUsers() {
        const users = await this.prisma.user.findMany({
            where: {
                role: "User"
            },
        });
        return users;
    }
    async newUser(userData) {
        try {
            const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
            if (!dateRegex.test(userData.happyday)) {
                throw new Error('A data happyday deve estar no formato YYYY-MM-DD');
            }
            if (!['Admin', 'User'].includes(userData.role)) {
                throw new Error('O papel do usuário deve ser Admin ou User.');
            }
        }
        catch (error) {
            console.error('Erro ao criar o usuário:', error);
            throw new Error('Erro ao criar o usuário: ' + error);
        }
        const user = this.prisma.user.create({
            data: {
                name: userData.name,
                cpf: userData.cpf,
                happyday: userData.happyday,
                tell: userData.tell,
                role: userData.role,
                address: {
                    create: {
                        num: userData.address.num,
                        cep: userData.address.cep,
                        complement: userData.address.complement,
                        street: userData.address.street,
                    },
                },
            },
            include: {
                address: true
            }
        });
        return user;
    }
    async patchFunctionary(id, fnUpdate) {
        const fnUp = this.prisma.user.findUnique({ where: { id } });
        console.log(fnUp);
        if (!fnUp) {
            throw new common_1.NotFoundException(`id ${id} não encontrado`);
        }
        await this.prisma.user.update({
            where: { id },
            data: fnUpdate
        });
    }
};
exports.FunctionaryService = FunctionaryService;
exports.FunctionaryService = FunctionaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FunctionaryService);
//# sourceMappingURL=functionary.service.js.map