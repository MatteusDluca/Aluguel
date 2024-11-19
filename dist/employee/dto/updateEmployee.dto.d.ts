import { createAddressDto } from './createAddress/createAddress.dto';
import { createWageDto } from './createWage.dto';
import { createTimeDto } from './createTime.dto';
import { createRoleDto } from './createRole.dto';
export declare class UpdateEmployeeDto {
    name?: string;
    email?: string;
    cpf?: string;
    telephone?: string;
    niver?: string;
    address?: createAddressDto;
    role?: createRoleDto;
    wage?: createWageDto;
    time?: createTimeDto;
}
