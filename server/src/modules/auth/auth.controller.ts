import { Controller, Post, HttpStatus, HttpCode, Get, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthDto, CredentialsDto } from './models';
import { AuthEndpoints } from '../common';

@Controller(AuthEndpoints.ROOT)
@ApiUseTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(AuthEndpoints.TOKEN)
  @ApiOperation({ title: 'Get token via credentials' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Jwt token with expiry', type: AuthDto })
  public async getToken(@Body() credentials: CredentialsDto): Promise<AuthDto> {
    return await this.authService.createToken(credentials);
  }
}
