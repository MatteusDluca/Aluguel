import { createAddressDto } from './createAddress/createAddress.dto';
import { createTimeDto } from './createTime.dto';
import { createWageDto } from './createWage.dto';
import { createRoleDto } from './createRole.dto';
export declare class CreateEmployeeDto {
    name: string;
    email: string;
    cpf: string;
    telephone: string;
    niver: string;
    role: createRoleDto;
    address: createAddressDto;
    time: createTimeDto;
    wage: createWageDto;
}
