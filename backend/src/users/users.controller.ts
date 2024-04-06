import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';
import { CreateUserDto } from './users.dto';
import { UserAlreadyExistsError, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('')
  @Public()
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      await this.userService.create(createUserDto);
    } catch (e) {
      if (e instanceof UserAlreadyExistsError) {
        throw new BadRequestException(e.message);
      }
    }
  }

  @Get('')
  @Public()
  async getAll() {
    return this.userService.getAll();
  }
}
