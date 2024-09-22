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
  UseGuards,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt.guard'
import { RoleGuards } from './role-guards.service'
import { Roles } from './roles.decorator'
import { Stock } from './stock.interface'
import { StockService } from './stock.service'
import type { StockUpdate } from './stock-update.interface'

@Controller('stock')
@UseGuards(JwtAuthGuard, RoleGuards)
export class StockController {
  constructor(private readonly stockService: StockService) {}
  @Post()
  @Roles('Admin', 'User')
  create(@Body() createStock: Stock, @Request() req) {
    const userId = req.user.id
    return this.stockService.create(createStock, userId)
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
