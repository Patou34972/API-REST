/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'patrice',
      password: 'changement',
    },
    {
      userId: 2,
      username: 'melanie',
      password: 'souris',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}