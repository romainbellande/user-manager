// tslint:disable-next-line:no-submodule-imports
import { Action } from 'redux';
import { ActionsObservable, combineEpics, createEpicMiddleware, ofType } from 'redux-observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { UserAction, UserActions, UserRegister } from './user.actions';
import { UserService } from './user.service';

const userService = new UserService();

const register$ = (action$: ActionsObservable<UserRegister>) =>
  action$.pipe(
    ofType(UserActions.REGISTER),
    switchMap((action) => userService.create(action.payload)
      .map((payload) => ({ type: UserActions.REGISTER_SUCCESS, payload }))
      .catch((payload) => Observable.of({ type: UserActions.REGISTER_FAILED, payload }))));

export const userEffects = combineEpics(register$);
