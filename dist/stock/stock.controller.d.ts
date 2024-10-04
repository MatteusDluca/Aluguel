import { StockService } from './stock.service';
import { StockDTO } from './stockDTO';
import { StockUpdate } from './stock-update.interface';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    create(createStock: StockDTO, req: any): Promise<{
        id: string;
        code: string;
        status: string;
        title: string;
        description: string;
        size: string;
        user_id: string;
    }>;
    gtFind(title?: string, code?: string, description?: string): Promise<import("./stock.interface").Stock[]>;
    dStock(id: string): Promise<void>;
    update(id: string, updateStock: StockUpdate): Promise<void>;
}
