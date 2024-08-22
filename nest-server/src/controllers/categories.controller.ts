import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { CategoryDocument, CategoryMatch } from 'src/schemas/category.schema';
import { CategoriesService } from 'src/services/categories.service';
import { SmartResponse } from 'src/types/smart-response';
import { normalizeMatch } from 'src/utiltiy';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':id')
  async findOneById(
    @Param('id') id: string,
  ): Promise<SmartResponse<CategoryDocument>> {
    const category = await this.categoriesService.findOneById(id);

    if (!category) {
      throw new NotFoundException({
        message: `Category with id: ${id} was not found.`,
        success: false,
        data: null,
      });
    }

    return {
      message: 'Category found successfully.',
      success: true,
      data: category,
    };
  }

  @Get()
  async findAll(
    @Query('match') match: CategoryMatch,
    @Query('include') include: object,
  ): Promise<SmartResponse<CategoryDocument[]>> {
    const normalizedMatch = normalizeMatch(match);

    const categories = await this.categoriesService.findAll(
      normalizedMatch,
      include,
    );

    return {
      message: 'Categories found successfully.',
      success: true,
      data: categories,
    };
  }
}
