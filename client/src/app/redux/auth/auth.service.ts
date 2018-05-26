import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import * as Cookies from 'universal-cookie';

import { getApi } from '../../helpers';
import { IAuth, AuthEndpoints, ICredentials } from '../../common';

export class AuthService {
  public login(credentials: ICredentials): Observable<IAuth> {
    const {ROOT, TOKEN} = AuthEndpoints;
    return Observable.ajax.post(getApi(ROOT, TOKEN))
      .map(({response}) => {
        const {token, expiresIn} = response as IAuth;
        const cookies = new Cookies();
        cookies.set('token', token, {maxAge: expiresIn});
        return response;
      });
  }

  public getTokenCookie(): Observable<string> {
    const cookies  = new Cookies();
    const token: string = cookies.get('token');

    return Observable.create((observer) => {
      if (!!token) {
        observer.next(token);
      } else {
        observer.error('no token found');
      }
    });
  }

}
