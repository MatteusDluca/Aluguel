import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import { UpdateEmployeeDto } from './dto/updateEmployee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(CreateEmployeeDto: CreateEmployeeDto): Promise<{
        message: string;
        data: {
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
        };
        error?: undefined;
    } | {
        message: string;
        error: any;
        data?: undefined;
    }>;
    findAll(): Promise<({
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
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<{
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
    delete(id: string): Promise<{
        message: string;
        deleteEmployee: void;
    }>;
    findAllAddress(): Promise<({
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
    deleteAddress(id: number): Promise<{
        message: string;
        deleteAddress: {
            num: string;
            complement: string | null;
            id: number;
            streetId: number;
            cepId: number;
            cityId: number;
            stateId: number;
            bairroId: number;
        };
    }>;
}
