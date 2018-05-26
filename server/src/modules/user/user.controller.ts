import { Controller, Get, Post, Body, Param, Req, HttpStatus, HttpException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { AppConfig } from '../../../../common/config';
import { UserService } from './user.service';
import { User, UserCreateDto } from './models';
import { UserEndpoints } from '../common';
import { defaultUserDbMock } from './mocks';

@Controller(UserEndpoints.ROOT)
@ApiUseTags('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {
    defaultUserDbMock();
  }

  @Post()
  @ApiOperation({ title: 'Create a new user' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'user successfully created', type: User })
  async create(@Body() user: UserCreateDto): Promise<User> {
    return this.userService.create(user);
  }

  @Get('me')
  @ApiOperation({ title: 'Get user information' })
  @ApiResponse({ status: HttpStatus.OK, description: 'success', type: User })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'unauthorized' })
  async find(@Req() req): Promise<User> {
    if (!(req.user != null && req.user.id != null)) throw new HttpException('token missing', HttpStatus.UNAUTHORIZED);
    return this.userService.findById(req.user.id);
  }
}
