import * as React from 'react';
const { connect } = require('react-redux');

import { AuthActions, IAuthState } from '../../../redux/auth';
import { UserActions } from '../../../redux/user';
import { authInterceptor } from './auth-interceptor';
import { Redirect } from 'react-router-dom';

interface IProps {
  auth?: IAuthState;
  loginFromCookies?: () => any;
}

@connect(
  (state) => ({ auth: state.auth }),
  (dispatch) => ({
    loginFromCookies: () => dispatch({ type: AuthActions.loginFromCookies.default() }),
}))
export class AppInitializer extends React.Component<IProps, {}> {
  public componentWillMount() {
    authInterceptor(() => this.props.auth);
    this.props.loginFromCookies();
  }

  public render() {
    return this.props.auth.loginFromCookiesStatus ? this.props.children : <Redirect to="/login"/>;
  }
}
