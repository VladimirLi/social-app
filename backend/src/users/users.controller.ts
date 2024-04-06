import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('')
  @Public()
  async register(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }

  @Get('')
  @Public()
  async getAll() {
    return this.userService.getAll();
  }
}
