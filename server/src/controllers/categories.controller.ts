import { Controller, Get, Param, Query } from '@nestjs/common';
import { PublicException } from 'src/errors/public-exception';
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
      throw new PublicException(`Category with id: ${id} was not found.`, 404);
    }

    return {
      message: 'Category found successfully.',
      success: true,
      statusCode: 200,
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
      statusCode: 200,
      data: categories,
    };
  }
}
