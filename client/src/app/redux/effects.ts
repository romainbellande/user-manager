import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { authEffects } from './auth';
import { userEffects } from './user';
import { customerEffects } from './customer';

export const rootEffects = combineEpics(
  authEffects,
  userEffects,
  customerEffects,
);

export const effectsMiddleware = createEpicMiddleware(rootEffects);
