import { createStore, applyMiddleware, compose, Store, Middleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { hot } from 'react-hot-loader';
import { history } from '../history';

import { AppConfig } from '../../../../common/config';
import rootReducer from './reducers';
import { effectsMiddleware } from './effects';
import { IStore } from './IStore';

function configureStore(history, initialState?: IStore): Store<IStore> {

  const middlewares: Middleware[] = [
    routerMiddleware(history),
    effectsMiddleware,
    thunk,
  ];

  /** Add Only Dev. Middlewares */
  if (AppConfig.ENV !== 'production' && process.env.BROWSER) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const composeEnhancers = (AppConfig.ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store: Store<IStore> = createStore<IStore>(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares),
  ));

  if (AppConfig.ENV === 'development' && (module as any).hot) {
    (module as any).hot.accept('./', () => {
      store.replaceReducer((require('./reducers')));
    });
  }

  return store;
}

export const store = configureStore(
  history,
  window.__INITIAL_STATE__,
);
