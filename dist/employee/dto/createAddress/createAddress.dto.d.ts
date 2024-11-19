import { createCepDto } from "./createCep.dto";
import { createStreetDto } from "./createstreet.dto";
import { createCityDto } from "./createCityDto";
import { createStateDto } from "./createStateDto";
import { createBairroDto } from "./createBairroDto";
export declare class createAddressDto {
    id?: number;
    num: string;
    complement?: string;
    cep: createCepDto;
    street: createStreetDto;
    city: createCityDto;
    state: createStateDto;
    bairro: createBairroDto;
}
