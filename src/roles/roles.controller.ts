import { Controller, Get, Post } from '@nestjs/common';
import { Role } from '@prisma/client';
import { RoleCreateDTO } from './dto/role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  find(): Promise<Role[]> {
    return this.rolesService.find();
  }

  @Post()
  async create(data: RoleCreateDTO): Promise<Role> {
    return await this.rolesService.create(data);
  }
}
