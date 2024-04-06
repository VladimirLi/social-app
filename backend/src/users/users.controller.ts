import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('')
  async register(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }
}
