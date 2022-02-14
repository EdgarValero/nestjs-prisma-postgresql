import { Prisma } from '@prisma/client';

export class UpdateUserDto {
  id?: string;
  email?: string;
  name?: string;
  role?: Prisma.RoleCreateNestedOneWithoutUserInput;
  roleId?: number;
}
