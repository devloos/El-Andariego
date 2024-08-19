import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from 'src/services/categories.service';

interface CategoryDto {}

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':id')
  findOneById(@Param('id') id: string): CategoryDto {
    return { id };
  }

  @Get()
  findAll(): Array<CategoryDto> {
    return [];
  }
}
