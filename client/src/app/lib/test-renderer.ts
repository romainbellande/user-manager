import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
const { HTMLAttributes, shallow, ShallowWrapper } = require('enzyme');

configure({ adapter: new Adapter() });

export const testRenderer = (element: any) => {
  return shallow(element, document.createElement('div'));
};
