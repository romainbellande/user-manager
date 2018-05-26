import * as React from 'react';

import { AppInitializer } from './AppInitializer';

export class Plugins extends React.Component<{}, {}> {
  public render() {
    return (
      <AppInitializer>
        {this.props.children}
      </AppInitializer>
    );
  }
}
