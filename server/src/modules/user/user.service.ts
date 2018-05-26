import { Model } from 'mongoose';
import { Component, Inject, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

import { User, UserCreateDto } from './models';

@Component()
export class UserService {
  constructor(@Inject('UserRepositoryToken')
              private readonly userRepository: Repository<User>) {}

  async create(userCreate: UserCreateDto): Promise<User> {
    const user = this.userRepository.create(userCreate);
    const errors = await validate(user);
    if (errors.length > 0) {
      throw new HttpException(errors.toString(), HttpStatus.BAD_REQUEST);
    } else {
      return this.userRepository.save(user)
      .then(({password, ...userCreated}) => userCreated)
      .catch(({message}) => {
        throw new HttpException(message, HttpStatus.BAD_REQUEST);
      });
    }
  }

  async findById(userId: number): Promise<User> {
    return await this.userRepository.findOneById(userId, { select: ['id', 'username', 'email'] })
    .catch((message) => {
      throw new HttpException(message, HttpStatus.UNAUTHORIZED);
    });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
