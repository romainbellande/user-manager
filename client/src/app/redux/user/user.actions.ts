// tslint:disable:max-classes-per-file

import { Action } from 'redux';

import { IUser, IUserCreate } from '../../common';
import { EntityTypeGen, TypeStatus } from '../lib/entity';

const typeGen = new EntityTypeGen('user');

export class UserActions {
  public static REGISTER = typeGen.get('Register');
  public static REGISTER_FAILED = typeGen.get('Register', TypeStatus.FAILED);
  public static REGISTER_SUCCESS = typeGen.get('Register', TypeStatus.SUCCESS);
}

export class UserRegister implements Action {
  public readonly type = UserActions.REGISTER;
  constructor(public payload: IUserCreate) {}
}

export class UserRegisterSuccess implements Action {
  public readonly type = UserActions.REGISTER_SUCCESS;
  constructor(public payload: IUser) {}
}

export class UserRegisterFailed implements Action {
  public readonly type = UserActions.REGISTER_FAILED;
  constructor(public payload: any) {}
}

export type UserAction = UserRegisterFailed
  | UserRegisterSuccess;
