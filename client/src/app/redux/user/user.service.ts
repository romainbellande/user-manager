import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { IUser, IUserCreate, UserEndpoints } from '../../common';
import { getApi } from '../../helpers';

export class UserService {
  public create(user: IUserCreate): Observable<IUser> {
    return Observable.ajax.post(getApi(UserEndpoints.ROOT), user)
    .map((e) => e.response.data);
  }
}
