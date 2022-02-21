import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  async find(): Promise<Post[]> {
    return await this.prismaService.post.findMany({
      include: {
        author: true,
      },
    });
  }

  async create(data: Prisma.PostCreateInput): Promise<Post> {
    return await this.prismaService.post.create({
      data,
    });
  }
}
