import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ICustomer, ICustomerCreate, CustomerEndpoints } from '../../common';
import { getApi } from '../../helpers';

export class CustomerService {
  public create(user: ICustomerCreate): Observable<ICustomer> {
    return Observable.ajax.post(getApi(CustomerEndpoints.ROOT), user)
    .map((e) => e.response.data);
  }

  public findAll(): Observable<ICustomer[]> {
    return Observable.ajax.get(getApi(CustomerEndpoints.ROOT))
      .map((e) => e.response.data);
  }
}
