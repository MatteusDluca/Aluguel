import { StockService } from './stock.service';
import { StockDTO } from './stockDTO';
import { StockUpdate } from './stock-update.interface';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    create(createStock: StockDTO, file: Express.Multer.File, req: any): Promise<{
        id: string;
        title: string;
        description: string;
        code: string;
        status: string;
        size: string;
        imageUrl: string | null;
        user_id: string;
    }>;
    uploadImage(file: Express.Multer.File, userId: string): Promise<{
        imageUrl: string;
    }>;
    gtFind(title?: string, code?: string, description?: string): Promise<import("./stock.interface").Stock[]>;
    dStock(id: string): Promise<void>;
    update(id: string, updateStock: StockUpdate): Promise<void>;
}
