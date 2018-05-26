import { Reducer } from 'redux';

import { AuthActions } from '../auth/auth.actions';
import { UserAction, UserActions } from './user.actions';
import { initialState, IUserState } from './user.state';
import { IUser } from '../../common';

export const userReducer: Reducer<IUserState> = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case AuthActions.CONNECT_SUCCESS: {
      const {id, username, email} = action.payload as IUser;
      return {id, username, email};
    }

    default:
      return state;
  }
};
