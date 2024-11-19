import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import { UpdateEmployeeDto } from './dto/updateEmployee.dto';
export declare class EmployeeService {
    private prisma;
    constructor(prisma: PrismaService);
    createEmployee(data: CreateEmployeeDto): Promise<{
        name: string;
        email: string;
        cpf: string;
        telephone: string;
        niver: string;
        id: string;
        roleId: number;
        addressId: number;
        wageId: number;
        timeId: number;
        createdAt: Date;
        updateAt: Date;
    }>;
    updateEmployee(id: string, data: UpdateEmployeeDto): Promise<{
        name: string;
        email: string;
        cpf: string;
        telephone: string;
        niver: string;
        id: string;
        roleId: number;
        addressId: number;
        wageId: number;
        timeId: number;
        createdAt: Date;
        updateAt: Date;
    }>;
    findAllEmployees(): Promise<({
        role: {
            role: string;
            id: number;
        };
        address: {
            street: {
                street: string;
                id: number;
            };
            cep: {
                cep: string;
                id: number;
            };
            city: {
                city: string;
                id: number;
            };
            state: {
                state: string;
                id: number;
            };
            bairro: {
                bairro: string;
                id: number;
            };
        } & {
            num: string;
            complement: string | null;
            id: number;
            streetId: number;
            cepId: number;
            cityId: number;
            stateId: number;
            bairroId: number;
        };
        wage: {
            amount: number;
            id: number;
        };
        Time: {
            time: string;
            id: number;
        };
    } & {
        name: string;
        email: string;
        cpf: string;
        telephone: string;
        niver: string;
        id: string;
        roleId: number;
        addressId: number;
        wageId: number;
        timeId: number;
        createdAt: Date;
        updateAt: Date;
    })[]>;
    deleteEmployee(id: string): Promise<void>;
    findAllAdress(): Promise<({
        street: {
            street: string;
            id: number;
        };
        cep: {
            cep: string;
            id: number;
        };
        city: {
            city: string;
            id: number;
        };
        state: {
            state: string;
            id: number;
        };
        bairro: {
            bairro: string;
            id: number;
        };
    } & {
        num: string;
        complement: string | null;
        id: number;
        streetId: number;
        cepId: number;
        cityId: number;
        stateId: number;
        bairroId: number;
    })[]>;
    deleteaddress(id: number): Promise<{
        num: string;
        complement: string | null;
        id: number;
        streetId: number;
        cepId: number;
        cityId: number;
        stateId: number;
        bairroId: number;
    }>;
}
