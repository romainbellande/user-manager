import { Reducer } from 'redux';

import { CustomerAction, CustomerActions } from './customer.actions';
import { initialState } from '../lib/entity';
import { ICustomerState } from './customer.state';
import { ICustomer } from '../../common';

export const customerReducer: Reducer<ICustomerState> = (state = initialState, action: CustomerAction) => {
  switch (action.type) {
    case CustomerActions.create.success(): {
      const customer = action.payload as ICustomer;
      return {
        ids: [...state.ids, customer.id],
        entities: [...state.entities, customer],
        selectedId: state.selectedId
      };
    }

    case CustomerActions.findAll.success(): {
      const customers = action.payload as ICustomer[];
      return {
        ids: customers.map((customer) => customer.id),
        entities: customers,
        selectedId: this.state.selectedId
      };
    }

    default:
      return state;
  }
};
