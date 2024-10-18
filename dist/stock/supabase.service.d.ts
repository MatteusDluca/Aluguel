export declare class SupaBaseService {
    private supabase;
    constructor();
    uploadImage(file: Express.Multer.File, bucket: string, userId: string): Promise<string>;
}
