import { Reducer } from 'redux';

import { IEntityState } from './entity.state';

type reducerCallback = <T extends IEntityState<any>>(state: T) => T;

// export const entityReducer = <T extends IEntityState, Y>(initialState: T, callback: reducerCallback) => {
//   return (state: T = initialState, action: Y): Reducer<T> => callback(state)
// };
