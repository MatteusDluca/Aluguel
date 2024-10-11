export declare class SupaBaseService {
    private supabase;
    constructor();
    uploadImage(file: Express.Multer.File, bucket: string): Promise<string>;
}
