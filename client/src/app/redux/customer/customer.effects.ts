// tslint:disable-next-line:no-submodule-imports
import { combineEpics } from 'redux-observable';

import { reduxEffect } from '../lib';
import { CustomerActions,
         CustomerCreate,
         CustomerFindAll } from './customer.actions';
import { CustomerService } from './customer.service';

const customerService = new CustomerService();

const create$ = reduxEffect(
  CustomerActions.create,
  customerService.create,
  { withParams: true }
);

const findAll$ = reduxEffect(
  CustomerActions.findAll,
  customerService.findAll,
);


export const customerEffects = combineEpics(create$, findAll$);
