import { Inject, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { CustomPrismaService } from 'nestjs-prisma';
import { ExtendedPrismaClient } from 'src/prisma/prisma.extension';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  private prisma;
  constructor(
    @Inject('PrismaService')
    private prismaService: CustomPrismaService<ExtendedPrismaClient>,
  ) {
    this.prisma = this.prismaService.client;
  }

  async findOne(email: string): Promise<User | undefined> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return user || undefined;
  }

  async create(createUserDto: CreateUserDto): Promise<User | undefined> {
    try {
      const user = await this.prisma.user.create({
        data: createUserDto,
      });
      return user;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new UserAlreadyExistsError(createUserDto.email);
        }
      }
    }
    return undefined;
  }

  async getAll(): Promise<Partial<User>[]> {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
      },
    });
  }
}

export class UserAlreadyExistsError extends Error {
  constructor(email: string) {
    super(`User with email ${email} already exists`);
  }
}
