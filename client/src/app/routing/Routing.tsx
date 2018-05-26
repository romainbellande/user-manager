import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
const { withRouter } = require('react-router-dom');
const { connect } = require('react-redux');
import { push } from 'react-router-redux';

import { IStore } from '../redux';
import { IAuthState } from '../redux/auth';
import { PrivateRoute } from '../components';
import { HomePage, LoginPage, RegisterPage } from '../pages';

interface IProps {
  auth?: IAuthState;
}

const ConnectedSwitch = connect(state => ({
  location: state.routing.location
}))(Switch);

@withRouter
@connect(
  (state: IStore) => ({ auth: state.auth, location: state.routing.location }),
)
export class Routing extends React.Component<IProps, {}> {
  public render() {
    return (
      <ConnectedSwitch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/" component={HomePage} />
        {/* <PrivateRoute path="/" component={HomePage} isAuth={this.props.auth.token} /> */}
      </ConnectedSwitch>
    );
  }
}
