import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  imports: [],
  controllers: [RolesController],
  providers: [RolesService, PrismaService],
})
export class RolesModule {}
