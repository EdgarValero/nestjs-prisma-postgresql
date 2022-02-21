import { Body, Controller, Get, Post } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { CreatePostDto } from './dto/post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async find(): Promise<PostModel[]> {
    return await this.postsService.find();
  }

  @Post()
  async create(@Body() data: CreatePostDto): Promise<PostModel> {
    return await this.postsService.create(data);
  }
}
