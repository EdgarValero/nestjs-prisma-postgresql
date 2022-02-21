import { Prisma } from '@prisma/client';

export class CreatePostDto implements Prisma.PostCreateInput {
  title: string;
  content: string;
  published?: boolean;
  author: Prisma.UserCreateNestedOneWithoutPostsInput;
  authorId: number;
}
