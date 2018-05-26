import * as React from 'react';

export class FA extends React.Component<{size?: 2 | 3 | 5 | 7 }, {}> {
  public getSize(): string {
    return this.props.size ? ' fa-' + this.props.size + 'x' : '';
  }
  public render() {
    return (
      <i className={'fa fa-' + this.props.children + this.getSize()} />
    );
  }
}
