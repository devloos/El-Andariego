import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
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
      throw new NotFoundException({
        message: `Post with id: ${id} was not found.`,
        success: false,
        data: null,
      });
    }

    return {
      message: 'Post found successfully.',
      success: true,
      data: post,
    };
  }

  @Get()
  async findAll(): Promise<SmartResponse<PostDocument[]>> {
    const posts = await this.postsService.findAll();

    return {
      message: 'Posts found successfully.',
      success: true,
      data: posts,
    };
  }
}
