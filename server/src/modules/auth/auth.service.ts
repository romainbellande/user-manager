import { Model } from 'mongoose';
import { Component, Inject, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Repository } from 'typeorm';

import { User } from '../user/models';
import { AuthDto, CredentialsDto } from './models';

@Component()
export class AuthService {
  constructor(
    @Inject('UserRepositoryToken') private readonly userRepository: Repository<User>) {}

  async createToken(credentials: CredentialsDto): Promise<AuthDto> {
    return await this.userRepository.findOne(credentials)
      .then((userDoc) => {
        const expiresIn = 3 * 24 * 3600, secretOrKey = 'Iet4weedEif0juer';
        const token = jwt.sign({id: userDoc.id}, secretOrKey, { expiresIn });
        return {
          expiresIn,
          token,
        };
      })
      .catch((error) => {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      });
  }

  validateUser(userId: { id: number }): Promise<boolean> {
    return this.userRepository.findOneById(userId)
      .then(() => true)
      .catch(() => false);
  }
}
