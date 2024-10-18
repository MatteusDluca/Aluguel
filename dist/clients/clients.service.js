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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClientsService = class ClientsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createClient(clientData) {
        const client = this.prisma.client.create({
            data: {
                name: clientData.name,
                cpf: clientData.cpf,
                tel: clientData.tel,
                email: clientData.email,
                address: {
                    create: {
                        num: clientData.address.num,
                        street: clientData.address.street,
                        complement: clientData.address.complement,
                        cep: clientData.address.cep,
                    },
                },
            },
            include: {
                address: true,
            },
        });
        return client;
    }
    async searchClient(cpf, name, email) {
        return await this.prisma.client.findMany({
            where: {
                AND: [
                    cpf ? { cpf: { contains: cpf, mode: 'insensitive' } } : {},
                    name ? { name: { contains: name, mode: 'insensitive' } } : {},
                    email ? { email: { contains: email, mode: 'insensitive' } } : {},
                ],
            },
            include: {
                address: true,
            },
        });
    }
    async listedClients(cpf, name, email) {
        if (cpf || name || email) {
            return await this.searchClient(cpf, name, email);
        }
        return await this.prisma.client.findMany({
            include: {
                address: true,
            },
        });
    }
    async patchClients(id, clientsint) {
        const cli = this.prisma.client.findUnique({ where: { id } });
        if (!cli) {
            throw new common_1.NotFoundException(`Id ${id} não encontrado`);
        }
        await this.prisma.client.update({
            where: { id },
            data: clientsint,
        });
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientsService);
//# sourceMappingURL=clients.service.js.map