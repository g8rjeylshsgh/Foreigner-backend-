import { Injectable } from '@nestjs/common';

interface User {
  id: string;
  phone: string;
  email: string;
  isVerified: boolean;
  verificationCode: string;
}

@Injectable()
export class UserService {
  private users: User[] = [];

  register(phone: string, email: string, verificationCode: string): User {
    const newUser: User = {
      id: (Math.random() * 100000).toString(),
      phone,
      email,
      isVerified: false,
      verificationCode,
    };
    this.users.push(newUser);
    return newUser;
  }

  verifyUser(phone: string, code: string): boolean {
    const user = this.users.find((u) => u.phone === phone);
    if (user && user.verificationCode === code) {
      user.isVerified = true;
      return true;
    }
    return false;
  }

  getAllUsers(): User[] {
    return this.users;
  }
}