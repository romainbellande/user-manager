import './LoginPage.scss';

import * as React from 'react';
import { Form, FormApi, Text } from 'react-form';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { push } from 'react-router-redux';
const { connect } = require('react-redux');
const { withRouter } = require('react-router-dom');
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

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
      <section className="LoginPage app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col sm="8" md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <Form
                      validateError={this.errorValidator}
                      onSubmit={this.onSubmit}
                    >
                      {this.renderForm}
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        {this.redirect()}
      </section>
    );
  }

  public renderForm(formApi: FormApi): JSX.Element {
    return (
      <form className="LoginPage__form" onSubmit={formApi.submitForm}>
        <div className="form-group">
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-envelope"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Text id="login-email" type="email" className="form-control" field="email" placeholder="Email"/>
          </InputGroup>
        </div>
        <div className="form-group">
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-lock"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Text id="login-password" type="password" className="form-control" field="password" placeholder="Password"/>
          </InputGroup>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }

  public redirect() {
    console.log('auth token ?', this.props.auth.token);
    return !!this.props.auth.token ? <Redirect to="/" /> : null;
  }
}
