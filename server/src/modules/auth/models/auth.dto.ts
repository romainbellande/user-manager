import { ApiModelProperty } from '@nestjs/swagger';

import { IAuth } from '../../common';

export class AuthDto implements IAuth {
  @ApiModelProperty()
  token: string;

  @ApiModelProperty()
  expiresIn: number;
}
