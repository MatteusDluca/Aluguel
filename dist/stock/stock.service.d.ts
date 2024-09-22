import { PrismaService } from 'src/prisma/prisma.service';
import { Stock } from './stock.interface';
import type { StockUpdate } from './stock-update.interface';
export declare class StockService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(stockData: Stock, userId: string): Promise<{
        id: string;
        title: string;
        description: string;
        code: string;
        status: string;
        size: string;
        user_id: string;
    }>;
    search(title?: string, code?: string, description?: string): Promise<Stock[]>;
    getStock(title?: string, code?: string, description?: string): Promise<Stock[]>;
    dS(id: string): Promise<void>;
    upStock(id: string, updateStock: StockUpdate): Promise<void>;
}
