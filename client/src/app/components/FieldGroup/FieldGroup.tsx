import './FieldGroup.scss';
import * as React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap/lib';
import { SelectOptions } from 'react-form';

export interface IFieldGroup {
  id: string;
  label?: string;
  type: string;
  placeholder?: string;
  onChange: (e) => void;
  options?: SelectOptions;
}

export class FieldGroup extends React.Component<IFieldGroup, {}> {
  public render() {
    return (
      <section className="FieldGroup">
      <FormGroup controlId={this.props.id}>
        {this.renderLabel()}
        {this.renderControl()}
      </FormGroup>
      </section>
    );
  }

  public renderControl(): JSX.Element {
    return this.props.type === 'select' ?
    this.renderSelect() :
    this.renderDefaultControl();
  }

  public renderDefaultControl(): JSX.Element {
    return <FormControl {...this.props}/>;
  }

  public renderLabel(): JSX.Element {
    return this.props.label ?
    <ControlLabel>{this.props.label}</ControlLabel> :
    null;
  }

  public renderOptions(): JSX.Element[] {
    return this.props.options.map((option) =>
      <option key={'option-' + option.label} value={option.value}>{option.label}</option>);
  }

  public renderSelect(): JSX.Element {
    return (
      <FormControl componentClass="select" {...this.props}>
        {/* {this.renderDefaultOption()} */}
        {this.renderOptions()}
      </FormControl>
    );
  }
}
