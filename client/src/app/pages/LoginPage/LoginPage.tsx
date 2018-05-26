import './LoginPage.scss';

import * as React from 'react';
import { Form, FormApi, Text } from 'react-form';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { push } from 'react-router-redux';
const { connect } = require('react-redux');
const { withRouter } = require('react-router-dom');

import { IStore } from '../../redux';
import { Validators } from '../../lib';
import { AuthActions, IAuthState } from '../../redux/auth';
import { ICredentials, IUser } from '../../common';

export interface ILoginPage extends RouteComponentProps<any> {
  auth?: IAuthState;
  connection?: (credentials: ICredentials) => any;
}

@withRouter
@connect(
  (state) => ({ auth: state.auth }),
  (dispatch) => ({
    connection: (payload: ICredentials) => dispatch({ type: AuthActions.CONNECT, payload }),
  }),
)
export class LoginPage extends React.Component<ILoginPage, {}> {
  constructor(props, state) {
    super(props, state);
    this.onSubmit = this.onSubmit.bind(this);
  }
  public errorValidator(values: ICredentials): {} {
    return {
      email: !Validators.email(values.email) ? 'Please provide a valid email' : null,
      password: !Validators.password(values.password) ?
        'The password must contains minimum 8 characters' : null,
    };
  }

  public onSubmit(credentials: ICredentials, error, formApi: FormApi): void {
    this.props.connection(credentials);
  }
  public render() {
    return (
      <section className="LoginPage page">
        <Form
          validateError={this.errorValidator}
          onSubmit={this.onSubmit}
        >
          {this.renderForm}
        </Form>
        {this.redirect()}
      </section>
    );
  }

  public renderForm(formApi: FormApi): JSX.Element {
    return (
      <form className="LoginPage__form" onSubmit={formApi.submitForm}>
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <Text id="login-email" type="email" className="form-control" field="email"/>
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <Text id="login-password" type="password" className="form-control" field="password" />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }

  public redirect() {
    return !!this.props.auth.token ? <Redirect to="/" /> : null;
  }
}
