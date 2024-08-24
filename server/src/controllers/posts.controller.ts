import { Controller, Get, Param } from '@nestjs/common';
import { PublicException } from 'src/errors/public-exception';
import { PostDocument } from 'src/schemas/post.schema';
import { PostsService } from 'src/services/posts.service';
import { SmartResponse } from 'src/types/smart-response';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':id')
  async findOneById(
    @Param('id') id: string,
  ): Promise<SmartResponse<PostDocument>> {
    const post = await this.postsService.findOneById(id);

    if (!post) {
      throw new PublicException(`Post with id: ${id} was not found.`, 404);
    }

    return {
      message: 'Post found successfully.',
      success: true,
      statusCode: 200,
      data: post,
    };
  }

  @Get()
  async findAll(): Promise<SmartResponse<PostDocument[]>> {
    const posts = await this.postsService.findAll();

    return {
      message: 'Posts found successfully.',
      success: true,
      statusCode: 200,
      data: posts,
    };
  }
}
