import { ReduxAction } from './redux-action';

export class ReduxActions {
  constructor(private reducerName: string) {}

  public setAction(actionName: string): ReduxAction {
    return new ReduxAction(this.reducerName, actionName);
  }
}
