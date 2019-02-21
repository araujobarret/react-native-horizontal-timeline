import React from 'react';
import { shallow } from 'enzyme';

import HorizontalTimeline from '../HorizontalTimeline';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<HorizontalTimeline date={new Date()} />);  
    expect(component).toMatchSnapshot();
  });
});
