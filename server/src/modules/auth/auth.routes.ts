import { RequestMethod } from '@nestjs/common';

import { UserEndpoints } from '../common';

export const authRoutes = [
  { path: `/${ UserEndpoints.ROOT }`, method: RequestMethod.GET },
  { path: `/${ UserEndpoints.ROOT }`, method: RequestMethod.PUT },
  { path: `/${ UserEndpoints.ROOT }`, method: RequestMethod.PATCH },
  { path: `/${ UserEndpoints.ROOT }`, method: RequestMethod.DELETE },
  { path: `/${ UserEndpoints.ROOT }/me`, method: RequestMethod.ALL },
];
