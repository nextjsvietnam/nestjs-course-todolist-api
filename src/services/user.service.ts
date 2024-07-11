import { Injectable, Logger } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    try {
      const u = await this.prismaService.user.create({
        data,
      });
      return u;
    } catch (error) {
      Logger.log(error);
      return null;
    }
  }
}
