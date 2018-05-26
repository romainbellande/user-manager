import { Action } from 'redux';
import { ActionsObservable, combineEpics, createEpicMiddleware, ofType } from 'redux-observable';
import { of } from 'rxjs/observable/of';import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { IAuth } from '../../common';
import { AuthActions, AuthConnect } from './auth.actions';
import { AuthService } from './auth.service';

const authService = new AuthService();

const connect$ = (action$: ActionsObservable<AuthConnect>) =>
  action$.pipe(
    ofType(AuthActions.CONNECT),
    switchMap(({payload}) => authService.login(payload)
    .map((payload: IAuth) => ({ payload, type: AuthActions.CONNECT_SUCCESS }))
    .catch((payload: any) => of({ payload, type: AuthActions.CONNECT_SUCCESS }))));

const loginFromCookies$ = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType(AuthActions.loginFromCookies.default()),
    switchMap(() => authService.getTokenCookie()
      .map((auth) => ({payload: auth, type: AuthActions.loginFromCookies.success()}))
      .catch((payload) => of({payload, type: AuthActions.loginFromCookies.failed()}))));


export const authEffects = combineEpics(connect$, loginFromCookies$);
