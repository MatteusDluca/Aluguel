import { Injectable } from '@nestjs/common'
import { createClient } from '@supabase/supabase-js'
import { randomUUID } from 'crypto'

@Injectable()
export class SupaBaseService {
  private supabase
  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY,
    )
  }

  async uploadImage(
    file: Express.Multer.File,
    bucket: string,
  ): Promise<string> {
    const fileName = `${randomUUID()}-${file.originalname}`

    const { error } = await this.supabase.storage
      .from(bucket)
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
      })

    if (error) {
      throw new Error(`Erro ao fazer upload da imagem: ${error.message}`)
    }

    const { publicURL } = this.supabase.storage
      .from(bucket)
      .getPublicUrl(fileName)

    return publicURL
  }
}
