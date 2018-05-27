// tslint:disable:max-classes-per-file

import { Action } from 'redux';

import { ICustomer, ICustomerCreate } from '../../common';
import { ReduxActions } from '../lib';

const actions = new ReduxActions('customer');

export class CustomerActions {
  public static create = actions.setAction('create');
  public static findById = actions.setAction('findById');
  public static findAll = actions.setAction('findAll');
}

export class CustomerCreate implements Action {
  public readonly type = CustomerActions.create.default();
  constructor(public payload: ICustomerCreate) {}
}

export class CustomerCreateFailed implements Action {
  public readonly type = CustomerActions.create.failed();
  constructor(public payload: any) {}
}

export class CustomerCreateSuccess implements Action {
  public readonly type = CustomerActions.create.success();
  constructor(public payload: ICustomer) {}
}

export class CustomerFindAll implements Action {
  public readonly type = CustomerActions.findAll.default();
}

export class CustomerFindAllFailed implements Action {
  public readonly type = CustomerActions.findAll.failed();
  constructor(public payload: any) {}
}

export class CustomerFindAllSuccess implements Action {
  public readonly type = CustomerActions.findAll.success();
  constructor(public payload: ICustomer[]) {}
}


export type CustomerAction =
    CustomerCreateFailed
  | CustomerCreateSuccess
  | CustomerFindAllFailed
  | CustomerFindAllSuccess;
