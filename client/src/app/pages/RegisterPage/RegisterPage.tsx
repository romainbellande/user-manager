import './RegisterPage.scss';

import * as React from 'react';
import { Form, FormApi, Text } from 'react-form';

import { IUserCreate } from '../../common';
import { Validators } from '../../lib';
import { UserActions } from '../../redux/user';
import { IAuthState } from '../../redux/auth';
const { connect } = require('react-redux')

interface IProps {
  auth?: IAuthState;
  register?: (userCreate: IUserCreate) => any;
}

@connect(
  ({auth}) => ({auth}),
  (dispatch) => ({
    register: (userCreate) => dispatch({ type: UserActions.REGISTER, payload: userCreate })
  })
)
export class RegisterPage extends React.Component<IProps, {}> {

  constructor(props, state) {
    super(props, state);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }
  public render() {
    return (
      <section className="RegisterPage page">
        <Form
          validateError={this.errorValidator}
          onSubmit={this.onSubmit}
        >
          {this.renderForm}
        </Form>
      </section>
    );
  }

  public onSubmit(userCreate: IUserCreate, error, formApi: FormApi): void {
    this.props.register(userCreate);
  }

  public renderForm(formApi: FormApi): JSX.Element {
    return (
      <form className="RegisterPage__form" onSubmit={formApi.submitForm}>
        <div className="form-group">
          <label htmlFor="register-username">Username</label>
          <Text id="register-username" type="text" className="form-control" field="username"/>
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="register-email">Email</label>
          <Text id="register-email" type="email" className="form-control" field="email"/>
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="register-password">Password</label>
          <Text id="register-password" type="password" className="form-control" field="password" />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    );
  }

  public errorValidator(values: IUserCreate): {} {
    return {
      email: !Validators.email(values.email) ? 'Please provide a valid email' : null,
      password: !Validators.password(values.password) ?
        'The password must contains minimum 8 characters' : null,
      username: !Validators.username(values.username) ? 'Please provide a valid username' : null,
    };
  }
}
