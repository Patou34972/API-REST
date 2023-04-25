/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
// import { User } from './interfaces/user.interfaces';
// import { User } from './interfaces/user.interfaces';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  users: any;
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateUserDto: UpdateUserDto) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  create(createUserDto: CreateUserDto) {
    throw new Error('Method not implemented.');
  }
  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'patrice',
  //     password: 'changement',
  //   },
  //   {
  //     userId: 2,
  //     username: 'melanie',
  //     password: 'souris',
  //   },
  // ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}