import React from 'react';
import { shallow } from 'enzyme';

import HorizontalTimeline from '../HorizontalTimeline';

describe('HorizontalTimeline', () => {
  it('should render correctly with just date props', () => {
    const component = shallow(<HorizontalTimeline date={new Date().toISOString()} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with just data, date props', () => {
    const component = shallow(
      <HorizontalTimeline
        date={new Date().toISOString()}
        data={{
          1: { marked: true, info: 'Some info' },
          2: { marked: true, info: 'Some info' }
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
