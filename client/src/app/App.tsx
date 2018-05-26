import './App.scss';

import * as React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import {
  ConnectedRouter,
  routerMiddleware } from 'react-router-redux';
import { Store } from 'redux';
import { CookiesProvider } from 'react-cookie';
const { connect, withRouter } = require('react-redux');

import { history } from './history';
import { store } from './redux';

import { HomePage, LoginPage, RegisterPage } from './pages';
import { Plugins, PrivateRoute } from './components';
import { Routing } from './routing';

const middleware = routerMiddleware(history);

@hot(module)
export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Plugins>
            <Routing />
          </Plugins>
        </ConnectedRouter>
      </Provider>
    );
  }
}
