import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { RoleCreateDTO } from './dto/role.dto';
@Injectable()
export class RolesService {
  constructor(private readonly prismaService: PrismaService) {}

  async find(): Promise<Role[]> {
    return await this.prismaService.role.findMany();
  }

  async create(data: RoleCreateDTO): Promise<Role> {
    return await this.prismaService.role.create({ data });
  }
}
