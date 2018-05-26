import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { authEffects } from './auth';
import { userEffects } from './user';

export const rootEffects = combineEpics(
  authEffects,
  userEffects,
);

export const effectsMiddleware = createEpicMiddleware(rootEffects);
