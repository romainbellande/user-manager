import { Model } from 'mongoose';
import { Component, Inject, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Repository } from 'typeorm';

import { AuthDto, CredentialsDto } from '../models';
import { authMock } from './auth.mock';

@Component()
export class AuthServiceMock {

  createToken(credentials: CredentialsDto) {
    return authMock;
  }

  validateUser(userId: { id: number }) {
    return true;
  }
}
