import { Prisma } from '@prisma/client';
import { PrismaService } from '../src/prisma.service';

const prisma = new PrismaService();

const roles: Prisma.RoleCreateInput[] = [
  {
    code: 'ADMIN',
  },
  {
    code: 'USER',
  },
];

const createRoles = async () => {
  for (const role of roles) {
    await prisma.role.create({
      data: role,
    });
  }
};

createRoles();
