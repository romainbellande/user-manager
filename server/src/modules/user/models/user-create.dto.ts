import { ApiModelProperty } from '@nestjs/swagger';

import { IUserCreate } from '../../common';

export class UserCreateDto implements IUserCreate {
  @ApiModelProperty()
  readonly username: string;

  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly password?: string;
}
