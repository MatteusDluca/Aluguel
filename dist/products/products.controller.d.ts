import { ProductsService } from './products.service';
import { createProductsDto } from './dto/createProducts.dto';
import { updateProductsDto } from './dto/updateProducts.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductsDto: createProductsDto): Promise<{
        message: string;
        data: {
            id: string;
            name: string;
            code: string;
            size: string;
            description: string;
            amount: number;
            rentalId: number;
            categoryId: number;
            imageId: number;
            colorId: number;
            spent_valueId: number;
            statusId: number;
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
        rental: {
            id: number;
            rental: string;
        };
        category: {
            id: number;
            category: string;
        };
        image: {
            id: number;
            image: string;
        };
        color: {
            id: number;
            color: string;
        };
        spent_value: {
            id: number;
            spent_value: number;
        };
        status: {
            id: number;
            status: string;
        };
    } & {
        id: string;
        name: string;
        code: string;
        size: string;
        description: string;
        amount: number;
        rentalId: number;
        categoryId: number;
        imageId: number;
        colorId: number;
        spent_valueId: number;
        statusId: number;
        createdAt: Date;
        updateAt: Date;
    })[]>;
    update(id: string, updateProductsDto: updateProductsDto): Promise<{
        id: string;
        name: string;
        code: string;
        size: string;
        description: string;
        amount: number;
        rentalId: number;
        categoryId: number;
        imageId: number;
        colorId: number;
        spent_valueId: number;
        statusId: number;
        createdAt: Date;
        updateAt: Date;
    }>;
    delete(id: string): Promise<{
        message: string;
        deleteProduct: void;
    }>;
}
