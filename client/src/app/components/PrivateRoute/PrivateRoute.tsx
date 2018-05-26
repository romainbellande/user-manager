import * as React from 'react';
import { Route, RouteProps, Redirect, RouteComponentProps } from 'react-router-dom';
const { connect } = require('react-redux');
const { withRouter } = require('react-router-dom');
import { push } from 'react-router-redux';

import { IStore } from '../../redux';
import { IAuthState } from '../../redux/auth';

interface IProps extends RouteComponentProps<any> {
  isAuth: boolean;
}

@withRouter
export class PrivateRoute extends Route<IProps> {
  public render() {
    return (
      <Route
        {...this.props}
        render={this.renderComponent}
      />
    );
  }

  public renderComponent = (props) => {
    return (
      this.props.isAuth ? (
        <React.Component {...props} />
      ) : (
        <Redirect from="/" to="/login" />
    ));
  }
}
