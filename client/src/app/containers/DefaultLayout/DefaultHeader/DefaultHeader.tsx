import './DefaultHeader.scss';
import * as React from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
// import logo from '../../../assets/img/brand/logo.svg';
// import sygnet from '../../../assets/img/brand/sygnet.svg';

export class DefaultHeader extends React.Component<{}, {}> {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="DefaultHeader d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: require('@/assets/img/brand/logo.svg'), width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: require('@/assets/img/brand/sygnet.svg'), width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}
