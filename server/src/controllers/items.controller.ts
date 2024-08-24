import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { PublicException } from 'src/errors/public-exception';
import {
  ItemDocument,
  ItemMatch,
  UpdateItemDto,
} from 'src/schemas/item.schema';
import { ItemsService } from 'src/services/items.service';
import { SmartResponse } from 'src/types/smart-response';
import { normalizeMatch } from 'src/utiltiy';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get(':id')
  async findOneById(
    @Param('id') id: string,
  ): Promise<SmartResponse<ItemDocument>> {
    const item = await this.itemsService.findOneById(id);

    if (!item) {
      throw new PublicException(`Item with id: ${id} was not found.`, 404);
    }

    return {
      message: 'Item found successfully.',
      success: true,
      statusCode: 200,
      data: item,
    };
  }

  @Get()
  async findAll(
    @Query('match') match: ItemMatch,
    @Query('include') include: object,
  ): Promise<SmartResponse<ItemDocument[]>> {
    const normalizedMatch = normalizeMatch(match);

    const items = await this.itemsService.findAll(normalizedMatch, include);

    return {
      message: 'Items found successfully.',
      success: true,
      statusCode: 200,
      data: items,
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
  ): Promise<SmartResponse<ItemDocument>> {
    if (updateItemDto.likes && updateItemDto.likes < 0) {
      throw new PublicException("Item likes can't be less than zero.", 400);
    }

    const item = await this.itemsService.update(id, updateItemDto);

    return {
      message: 'Item updated successfully.',
      success: true,
      statusCode: 200,
      data: item,
    };
  }
}
