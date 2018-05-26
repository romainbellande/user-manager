import './DefaultLayout.scss';
import * as React  from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
const { connect } = require('react-redux');

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import { NAV } from '../../nav';
// routes config
import { ROUTES } from '../../routes';
import { DefaultAside } from './DefaultAside';
import { DefaultFooter } from './DefaultFooter';
import { DefaultHeader } from './DefaultHeader';

const ConnectedSwitch = connect(state => ({
  location: state.routing.location
}))(Switch);

export class DefaultLayout extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app DefaultLayout">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={NAV} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={ROUTES}/>
            <Container fluid>
              <ConnectedSwitch>
                {ROUTES.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
              </ConnectedSwitch>
            </Container>
          </main>
          <AppAside fixed hidden>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}
