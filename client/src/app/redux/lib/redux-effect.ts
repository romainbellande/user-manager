import { Action } from 'redux';
import { ActionsObservable, combineEpics, createEpicMiddleware, ofType } from 'redux-observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { ReduxAction } from './redux-action';

interface IReduxEffectOptions {
  withParams: boolean;
}

interface IPayloadAction extends Action {
  payload?: any;
}

export const reduxEffect = <T extends IPayloadAction>(
  reduxAction: ReduxAction,
  method: (params?: any) => Observable<any>,
  options?: IReduxEffectOptions) => {
  return (actions$: ActionsObservable<T>) =>
    actions$.pipe(
      ofType(reduxAction.default()),
      switchMap((action) => (options && options.withParams ? method(action.payload) : method())
        .map((payload) => ({payload, type: reduxAction.success()}))
        .catch((payload) => Observable.of({payload, type: reduxAction.failed()}))));
};
