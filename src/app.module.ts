import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/roles.module';
import { PostsModule } from './posts/posts.module';
import { RolesService } from './roles/roles.service';

@Module({
  imports: [UsersModule, RolesModule, PostsModule],
  controllers: [AppController, UsersController, RolesController],
  providers: [AppService, UsersService, RolesService, PrismaService],
})
export class AppModule {}
