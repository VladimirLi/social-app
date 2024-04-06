import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (user) {
      const { password: storedPassword, ...userDetails } = user;
      const passwordIsValid = await this.comparePasswords(
        password,
        storedPassword,
      );
      if (passwordIsValid) return userDetails;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private comparePasswords(
    password: string,
    storedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, storedPassword);
  }
}
