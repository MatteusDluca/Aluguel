import { Stock } from './stock.interface';
import { StockService } from './stock.service';
import type { StockUpdate } from './stock-update.interface';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    create(createStock: Stock, req: any): Promise<{
        id: string;
        title: string;
        description: string;
        code: string;
        status: string;
        size: string;
        user_id: string;
    }>;
    gtFind(title?: string, code?: string, description?: string): Promise<Stock[]>;
    dStock(id: string): Promise<void>;
    update(id: string, updateStock: StockUpdate): Promise<void>;
}
