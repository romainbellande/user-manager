import './HomePage.scss';
import * as React from 'react';
import { Route, StaticRouter } from 'react-router-dom';
const { withRouter } = require('react-router-dom');
const { connect } = require('react-redux');

import { Header, SideNav } from '../../components';
import { AdminPage } from './AdminPage';
import { SettingsPage } from './SettingsPage';
import { IStore } from '../../redux/index';

@withRouter
@connect((state: IStore) => ({ location: state.routing.location }))
export class HomePage extends React.Component<{}, {}> {
  public render() {
    return (
      <section className="HomePage page">
        <SideNav />
        <section className="HomePage__wrapper">
          <Header/>
          <div>
            <Route path="/admin" component={AdminPage} />
            <Route path="/settings" component={SettingsPage} />
          </div>
        </section>
      </section>
    );
  }
}
