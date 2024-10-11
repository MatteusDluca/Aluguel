import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Stock } from './stock.interface'
import type { StockUpdate } from './stock-update.interface'
import { SupaBaseService } from './supabase.service'

@Injectable()
export class StockService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly supabaseService: SupaBaseService,
  ) {}

  async create(stockData: Stock, userId: string) {
    return await this.prisma.stock.create({
      data: {
        title: stockData.title,
        description: stockData.description,
        size: stockData.size,
        status: stockData.status,
        code: stockData.code,
        user: {
          connect: { id: userId },
        },
      },
    })
  }

  async uploadImage(
    file: Express.Multer.File,
    userId: string,
  ): Promise<string> {
    if (!file) {
      throw new Error('Nenhum arquivo foi enviado')
    }

    return await this.supabaseService.uploadImage(file, 'stock-images', userId)
  }

  async search(
    title?: string,
    code?: string,
    description?: string,
  ): Promise<Stock[]> {
    return await this.prisma.stock.findMany({
      where: {
        AND: [
          title ? { title: { contains: title, mode: 'insensitive' } } : {},
          code ? { code: { contains: code, mode: 'insensitive' } } : {},
          description
            ? { description: { contains: description, mode: 'insensitive' } }
            : {},
        ],
      },
    })
  }

  async getStock(
    title?: string,
    code?: string,
    description?: string,
  ): Promise<Stock[]> {
    if (title || code || description) {
      return await this.search(title, code, description)
    }
    return await this.prisma.stock.findMany()
  }

  async dS(id: string): Promise<void> {
    // console.log(`tentando deletar o ID ${id}`)
    const itemStock = await this.prisma.stock.findUnique({ where: { id } })

    if (!itemStock) {
      throw new NotFoundException(`Item com ID ${id} não encontrado`)
    }
    await this.prisma.stock.delete({ where: { id } })
  }

  async upStock(id: string, updateStock: StockUpdate): Promise<void> {
    const stockItem = await this.prisma.stock.findUnique({ where: { id } })

    if (!stockItem) {
      throw new NotFoundException(`Id ${id} não encontrado`)
    }
    await this.prisma.stock.update({
      where: { id },
      data: updateStock,
    })
  }
}
