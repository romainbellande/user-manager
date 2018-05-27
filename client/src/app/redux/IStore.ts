import { RouterState } from 'react-router-redux';

import { IEntityState } from './lib';
import { IAuthState } from './auth';
import { IUserState } from './user';
import { ICustomerState } from './customer';

export interface IStore {
  auth: IAuthState;
  user: IUserState;
  customer: ICustomerState;
  routing: RouterState;
}
