import { RouterState } from 'react-router-redux';

import { IEntityState } from './lib';
import { IAuthState } from './auth';
import { IUserState } from './user';

export interface IStore {
  auth: IAuthState;
  user: IUserState;
  routing: RouterState;
}
