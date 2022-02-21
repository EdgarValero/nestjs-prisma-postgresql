import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async find(): Promise<User[]> {
    return await this.prismaService.user.findMany({
      include: { role: true, posts: true, _count: true },
    });
  }

  async findOne(id: number): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: { id },
      include: { role: true, posts: true },
    });
  }

  async create(user: Prisma.UserCreateInput): Promise<User> {
    return await this.prismaService.user.create({
      data: user,
      include: { role: true },
    });
  }

  async update(id: number, user: Prisma.UserUpdateInput): Promise<User> {
    return await this.prismaService.user.update({
      where: { id },
      data: user,
      include: { role: true },
    });
  }

  async delete(id: number): Promise<User> {
    return await this.prismaService.user.delete({ where: { id } });
  }
}
