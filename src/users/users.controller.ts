import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async find(): Promise<User[]> {
    return await this.userService.find();
  }

  @Get('/:id')
  async findOne(@Param() { id }): Promise<User> {
    return await this.userService.findOne(Number(id));
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }

  @Put('/:id')
  async update(@Param() { id }, @Body() user: UpdateUserDto): Promise<User> {
    return await this.userService.update(Number(id), user);
  }

  @Delete('/:id')
  async delete(@Param() { id }): Promise<User> {
    return await this.userService.delete(Number(id));
  }
}
