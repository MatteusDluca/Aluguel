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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const upsert_helper_1 = require("../common/helpers/upsert.helper");
let EmployeeService = class EmployeeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createEmployee(data) {
        const time = await (0, upsert_helper_1.createOrUpdate)(this.prisma.time, { time: data.time.time }, { time: data.time.time });
        const role = await (0, upsert_helper_1.createOrUpdate)(this.prisma.role, { role: data.role.role }, { role: data.role.role });
        const wage = await (0, upsert_helper_1.createOrUpdate)(this.prisma.wage, { amount: data.wage.amount }, { amount: data.wage.amount });
        const cep = await (0, upsert_helper_1.createOrUpdate)(this.prisma.cep, { cep: data.address.cep.cep }, { cep: data.address.cep.cep });
        const city = await (0, upsert_helper_1.createOrUpdate)(this.prisma.city, { city: data.address.city.city }, { city: data.address.city.city });
        const state = await (0, upsert_helper_1.createOrUpdate)(this.prisma.state, { state: data.address.state.state }, { state: data.address.state.state });
        const bairro = await (0, upsert_helper_1.createOrUpdate)(this.prisma.bairro, { bairro: data.address.bairro.bairro }, { bairro: data.address.bairro.bairro });
        const street = await (0, upsert_helper_1.createOrUpdate)(this.prisma.street, { street: data.address.street.street }, { street: data.address.street.street });
        let address = await this.prisma.address.create({
            data: {
                num: data.address.num,
                complement: data.address.complement,
                streetId: street.id,
                cepId: cep.id,
                cityId: city.id,
                stateId: state.id,
                bairroId: bairro.id
            }
        });
        let employee = await this.prisma.employee.create({
            data: {
                name: data.name,
                email: data.email,
                cpf: data.cpf,
                telephone: data.telephone,
                niver: data.niver,
                roleId: role.id,
                addressId: address.id,
                timeId: time.id,
                wageId: wage.id
            }
        });
        return employee;
    }
    async updateEmployee(id, data) {
        const time = await (0, upsert_helper_1.createOrUpdate)(this.prisma.time, { time: data.time.time }, { time: data.time.time });
        const role = await (0, upsert_helper_1.createOrUpdate)(this.prisma.role, { role: data.role.role }, { role: data.role.role });
        const wage = await (0, upsert_helper_1.createOrUpdate)(this.prisma.wage, { amount: data.wage.amount }, { amount: data.wage.amount });
        const cep = await (0, upsert_helper_1.createOrUpdate)(this.prisma.cep, { cep: data.address.cep.cep }, { cep: data.address.cep.cep });
        const city = await (0, upsert_helper_1.createOrUpdate)(this.prisma.city, { city: data.address.city.city }, { city: data.address.city.city });
        const state = await (0, upsert_helper_1.createOrUpdate)(this.prisma.state, { state: data.address.state.state }, { state: data.address.state.state });
        const bairro = await (0, upsert_helper_1.createOrUpdate)(this.prisma.bairro, { bairro: data.address.bairro.bairro }, { bairro: data.address.bairro.bairro });
        const street = await (0, upsert_helper_1.createOrUpdate)(this.prisma.street, { street: data.address.street.street }, { street: data.address.street.street });
        let address;
        if (data.address.id) {
            address = await this.prisma.address.update({
                where: { id: data.address.id },
                data: {
                    num: data.address.num,
                    complement: data.address.complement,
                    streetId: street.id,
                    cepId: cep.id,
                    cityId: city.id,
                    stateId: state.id,
                    bairroId: bairro.id
                },
            });
        }
        else {
            address = await this.prisma.address.findFirst({
                where: {
                    num: data.address.num,
                    complement: data.address.complement,
                    streetId: street.id,
                    cepId: cep.id,
                    cityId: city.id,
                    stateId: state.id,
                    bairroId: bairro.id
                },
            });
            if (!address) {
                address = await this.prisma.address.create({
                    data: {
                        num: data.address.num,
                        complement: data.address.complement,
                        streetId: street.id,
                        cepId: cep.id,
                        cityId: city.id,
                        stateId: state.id,
                        bairroId: bairro.id
                    },
                });
            }
        }
        const updatedEmployee = await this.prisma.employee.update({
            where: { id },
            data: {
                name: data.name,
                email: data.email,
                cpf: data.cpf,
                telephone: data.telephone,
                niver: data.niver,
                roleId: role.id,
                addressId: address.id,
                timeId: time.id,
                wageId: wage.id,
            },
        });
        return updatedEmployee;
    }
    async findAllEmployees() {
        return this.prisma.employee.findMany({
            include: {
                address: {
                    include: {
                        street: true,
                        cep: true,
                        city: true,
                        state: true,
                        bairro: true
                    },
                },
                role: true,
                wage: true,
                Time: true
            }
        });
    }
    async deleteEmployee(id) {
        const Employee = await this.prisma.employee.findUnique({
            where: { id },
        });
        if (!Employee) {
            throw new Error('Funcionário não encontrado!');
        }
        const deleteEmployee = await this.prisma.employee.delete({
            where: { id }
        });
    }
    async findAllAdress() {
        return this.prisma.address.findMany({
            include: {
                street: true,
                cep: true,
                city: true,
                state: true,
                bairro: true
            },
        });
    }
    async deleteaddress(id) {
        const addressId = Number(id);
        const address = await this.prisma.address.findUnique({
            where: {
                id: addressId
            },
            include: {
                employees: true
            }
        });
        if (!address) {
            throw new Error('Funcionário não encontrado!');
        }
        if (address.employees.length > 0) {
            throw new Error('Endereço não pode ser excluído porque está associado a um ou mais funcionários!');
        }
        const deleteaddress = await this.prisma.address.delete({
            where: {
                id: addressId
            }
        });
        return deleteaddress;
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map