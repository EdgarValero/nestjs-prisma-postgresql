import { Prisma } from '@prisma/client';

export class CreateUserDto {
  email: string;
  name?: string;
  role: Prisma.RoleCreateNestedOneWithoutUserInput;
  roleId: number;
}
