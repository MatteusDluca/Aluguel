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
exports.EmployeeController = void 0;
const common_1 = require("@nestjs/common");
const employee_service_1 = require("./employee.service");
const createEmployee_dto_1 = require("./dto/createEmployee.dto");
const updateEmployee_dto_1 = require("./dto/updateEmployee.dto");
let EmployeeController = class EmployeeController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    async create(CreateEmployeeDto) {
        try {
            const employee = await this.employeeService.createEmployee(CreateEmployeeDto);
            return {
                message: 'Funcionário criado com sucesso',
                data: employee,
            };
        }
        catch (error) {
            return {
                message: 'Erro ao criar o usuário',
                error: error.message,
            };
        }
    }
    async findAll() {
        return this.employeeService.findAllEmployees();
    }
    async update(id, updateEmployeeDto) {
        return this.employeeService.updateEmployee(id, updateEmployeeDto);
    }
    async delete(id) {
        try {
            const deleteEmployee = await this.employeeService.deleteEmployee(id);
            if (!common_1.Delete) {
                throw new common_1.NotFoundException("Funcionário não encontrado");
            }
            return { message: "funcionário deletado com sucesso", deleteEmployee };
        }
        catch (error) {
            throw error;
        }
    }
    async findAllAddress() {
        return this.employeeService.findAllAdress();
    }
    async deleteAddress(id) {
        try {
            const deleteAddress = await this.employeeService.deleteaddress(id);
            if (!common_1.Delete) {
                throw new common_1.NotFoundException("Endereço não encontrado");
            }
            return { message: "Endereço deletado com sucesso", deleteAddress };
        }
        catch (error) {
            throw error;
        }
    }
};
exports.EmployeeController = EmployeeController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createEmployee_dto_1.CreateEmployeeDto]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateEmployee_dto_1.UpdateEmployeeDto]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)("address"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "findAllAddress", null);
__decorate([
    (0, common_1.Delete)('address/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "deleteAddress", null);
exports.EmployeeController = EmployeeController = __decorate([
    (0, common_1.Controller)('employee'),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeController);
//# sourceMappingURL=employee.controller.js.map