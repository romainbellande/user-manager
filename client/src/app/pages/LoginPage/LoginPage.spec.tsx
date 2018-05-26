import { LoginPage } from './LoginPage';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { testRenderer } from '../../lib';

describe('LoginPage', () => {
  it('should render login page', () => {
    const div = document.createElement('div');
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const loginPage = testRenderer(
      <Router>
        <Route children={LoginPage} />
      </Router>);
    expect(loginPage).toMatchSnapshot();
    expect(loginPage.find('.LoginPage__form')).toBeDefined();
  });
});
