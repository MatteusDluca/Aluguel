import { createProductsDto } from './dto/createProducts.dto';
import { updateProductsDto } from './dto/updateProducts.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    createProducts(data: createProductsDto): Promise<{
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
    updateProducts(id: string, data: updateProductsDto): Promise<{
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
    findAllProducts(): Promise<({
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
    deleteProducts(id: string): Promise<void>;
}
