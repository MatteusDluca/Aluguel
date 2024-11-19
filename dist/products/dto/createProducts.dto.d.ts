import { createRentalDto } from "./createRental.dto";
import { createCategoryDto } from "./createCategory.dto";
import { createImageDto } from "./createImage.dto";
import { createColorDto } from "./createColor.dto";
import { createSpentValueDto } from "./createSpentValue.dto";
import { createStatusDto } from "./createStatus.dto";
export declare class createProductsDto {
    name: string;
    code: string;
    size: string;
    description: string;
    amount: number;
    rental: createRentalDto;
    category: createCategoryDto;
    image: createImageDto;
    color: createColorDto;
    spent_value: createSpentValueDto;
    status: createStatusDto;
}
