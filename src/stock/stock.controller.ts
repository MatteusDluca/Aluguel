import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt.guard'
import { RoleGuards } from './role-guards.service'
import { Roles } from './roles.decorator'
import { StockService } from './stock.service'
import { StockDTO } from './stockDTO' // Importando o DTO
import { StockUpdate } from './stock-update.interface'
import { FileInterceptor } from '@nestjs/platform-express'
import { UserId } from './user-id.decorator'

@Controller('stock')
@UseGuards(JwtAuthGuard, RoleGuards)
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  @Roles('Admin', 'User')
  create(@Body() createStock: StockDTO, @Request() req) {
    const userId = req.user.id
    return this.stockService.create(createStock, userId)
  }

  @Post('/image') // Novo endpoint para upload de imagem
  @Roles('Admin', 'User')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @UserId() userId: string,
  ) {
    if (!file) {
      throw new Error('Nenhum arquivo foi enviado')
    }
    // Chame o método uploadImage do SupaBaseService
    const imageUrl = await this.stockService.uploadImage(file, userId)
    return { imageUrl } // Retorne a URL da imagem
  }

  @Get()
  @Roles('Admin', 'User')
  gtFind(
    @Query('title') title?: string,
    @Query('code') code?: string,
    @Query('description') description?: string,
  ) {
    return this.stockService.getStock(title, code, description)
  }

  @Delete(':id')
  @Roles('Admin', 'User')
  async dStock(@Param('id') id: string) {
    await this.stockService.dS(id)
  }

  @Patch(':id')
  @Roles('Admin', 'User')
  async update(@Param('id') id: string, @Body() updateStock: StockUpdate) {
    return this.stockService.upStock(id, updateStock)
  }
}
