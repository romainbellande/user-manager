import { ApiModelProperty } from '@nestjs/swagger';

import { ICustomerCreate, CustomerProfile } from '../../common';

export class CustomerCreateDto implements ICustomerCreate {
  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly profile: CustomerProfile;
}
