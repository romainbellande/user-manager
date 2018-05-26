import * as React from 'react';
import * as Loadable from 'react-loadable'

import { DefaultLayout } from './containers/DefaultLayout';
import { Users } from './views';

function Loading() {
  return <div>Loading...</div>;
}

export const ROUTES = [
  {
    path: '/users',
    exact: true,
    name: 'Users',
    component: Users
  }
];
