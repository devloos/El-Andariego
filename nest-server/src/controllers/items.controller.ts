import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
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
      throw new NotFoundException({
        message: `Item with id: ${id} was not found.`,
        success: false,
        data: null,
      });
    }

    return {
      message: 'Item found successfully.',
      success: true,
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
      data: items,
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
  ): Promise<SmartResponse<ItemDocument>> {
    if (updateItemDto.likes && updateItemDto.likes < 0) {
      return {
        message: "Item likes can't be less than zero.",
        success: false,
        data: null,
      };
    }

    const item = await this.itemsService.update(id, updateItemDto);

    return {
      message: 'Item updated successfully.',
      success: true,
      data: item,
    };
  }
}
