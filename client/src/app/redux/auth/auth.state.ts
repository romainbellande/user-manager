import { IAuth } from '../../common';
// tslint:disable-next-line:no-empty-interface
export interface IAuthState extends IAuth {
  loginFromCookiesStatus: string;
}

export const initialState: IAuthState = {
  expiresIn: null,
  token: null,
  loginFromCookiesStatus: null,
};
