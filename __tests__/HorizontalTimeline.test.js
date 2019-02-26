/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import HorizontalTimeline from '../HorizontalTimeline';

describe('HorizontalTimeline', () => {
  it('should render correctly with just date props', () => {
    const wrapper = shallow(<HorizontalTimeline date={new Date('2019-02-15').toISOString()} />);
    expect(wrapper.state().days).toHaveLength(28);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with just data, date props', () => {
    const wrapper = shallow(
      <HorizontalTimeline
        date={new Date('2019-02-15').toISOString()}
        data={{
          1: { marked: true, info: 'Some info' },
          2: { marked: true, info: 'Some info' }
        }}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
