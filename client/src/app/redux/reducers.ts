import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer } from 'redux-connect';
import { IStore } from './IStore';

import { authReducer } from './auth';
import { userReducer } from './user';

const rootReducer: Reducer<IStore> = combineReducers<IStore>({
  auth: authReducer,
  reduxAsyncConnect: reducer,
  routing: routerReducer,
  user: userReducer,
});

export default rootReducer;
