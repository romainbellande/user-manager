import { IUser } from '../../common';

// tslint:disable-next-line:no-empty-interface
export interface IUserState extends IUser {}

export const initialState: IUserState = {
  email: null,
  id: null,
  username: null,
};
