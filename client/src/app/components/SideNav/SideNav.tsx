import './SideNav.scss';
import * as React from 'react';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const { withRouter } = require('react-router-dom');
const { connect } = require('react-redux');

import { IStore } from '../../redux/IStore';
import { FA } from '../../lib';
import { IEntityState } from '../../redux/lib';


@withRouter
export class SideNav extends React.Component<{}, {}> {
  public render() {
    const formClose = () => this.setState({ showContentTypeForm: false });
    return (
      <section className="SideNav">
        <div className="SideNav__logo">
          <div>Bindex</div>
        </div>
        <ListGroup>
          <LinkContainer to="/settings">
            <ListGroupItem>
              <FA size={2}>cog</FA>
              <span className="nav-text">Settings</span>
            </ListGroupItem>
          </LinkContainer>
          <LinkContainer to="/admin">
            <ListGroupItem>
              <FA size={2}>address-book</FA>
              <span className="nav-text">Admin</span>
            </ListGroupItem>
          </LinkContainer>
        </ListGroup>
      </section>
    );
  }
}
