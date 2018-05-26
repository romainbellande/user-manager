import { ApiModelProperty } from '@nestjs/swagger';

import { ICredentials } from '../../common';

export class CredentialsDto implements ICredentials {
  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly password: string;
}
