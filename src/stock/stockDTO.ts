import { ApiProperty } from '@nestjs/swagger'

export class StockDTO {
  @ApiProperty({
    example: 'Produto A',
    description: 'Título do item de estoque',
  })
  title: string

  @ApiProperty({
    example: 'Descrição do Produto A',
    description: 'Descrição do item de estoque',
  })
  description: string

  @ApiProperty({ example: 'M', description: 'Tamanho do item de estoque' })
  size: string

  @ApiProperty({
    example: 'Available',
    description: 'Status do item de estoque',
  })
  status: string

  @ApiProperty({ example: '12346', description: 'Código do item de estoque' })
  code: string
}
