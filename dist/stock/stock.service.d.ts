import { PrismaService } from 'src/prisma/prisma.service';
import { Stock } from './stock.interface';
import type { StockUpdate } from './stock-update.interface';
import { SupaBaseService } from './supabase.service';
export declare class StockService {
    private readonly prisma;
    private readonly supabaseService;
    constructor(prisma: PrismaService, supabaseService: SupaBaseService);
<<<<<<< HEAD
    create(stockData: Stock, userId: string): Promise<{
=======
    create(stockData: Stock, userId: string, file: Express.Multer.File): Promise<{
>>>>>>> master
        id: string;
        title: string;
        description: string;
        code: string;
        status: string;
        size: string;
        imageUrl: string | null;
        user_id: string;
    }>;
    uploadImage(file: Express.Multer.File, userId: string): Promise<string>;
    search(title?: string, code?: string, description?: string): Promise<Stock[]>;
    getStock(title?: string, code?: string, description?: string): Promise<Stock[]>;
    dS(id: string): Promise<void>;
    upStock(id: string, updateStock: StockUpdate): Promise<void>;
}
