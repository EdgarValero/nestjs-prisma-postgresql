import { Prisma } from '@prisma/client';

export class CreateUserDto implements Prisma.UserCreateInput {
  email: string;
  name?: string;
  role: Prisma.RoleCreateNestedOneWithoutUserInput;
  roleId: number;
}

export class UpdateUserDto extends CreateUserDto {}
