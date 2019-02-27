/* eslint-env jest */
import React from 'react';
import { Text, View } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';

import HorizontalTimeline from '../HorizontalTimeline';

describe('HorizontalTimeline', () => {
  it('should render correctly with just date props', () => {
    const wrapper = shallow(<HorizontalTimeline date={new Date('2019-02-15').toISOString()} />);
    expect(wrapper.state().days).toHaveLength(28);
    expect(wrapper.find(View)).toBeTruthy();
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

  it('should correctly render the days labels', () => {
    const component = renderer.create(
      <HorizontalTimeline date={new Date('2019-02-15').toISOString()} />
    );
    expect(component.root.findByProps({ children: '1' })).toBeTruthy();
    expect(component.root.findByProps({ children: '10' })).toBeTruthy();
    expect(component.root.findByProps({ children: '25' })).toBeTruthy();
    expect(component.root.findByProps({ children: '28' })).toBeTruthy();
  });

  it('should correctly measure ScrollView height and each child View width', () => {
    const height = 100;
    const width = 50;
    const wrapper = shallow(
      <HorizontalTimeline
        date={new Date('2019-02-15').toISOString()}
        height={height}
        width={width}
      />
    );
    expect(wrapper.props().contentContainerStyle).toMatchObject({ height });
    // Verify the first child view of the scrollView and then the second object of the view style array,
    // this second one should match with the width props
    expect(wrapper.props().children[0].props.style[1]).toMatchObject({ width });
  });

  it('should correctly render the backgroundColor and color style props', () => {
    const backgroundColor = '#cc2200';
    const color = '#f50782';
    const wrapper = shallow(
      <HorizontalTimeline
        date={new Date('2019-02-15').toISOString()}
        backgroundColor={backgroundColor}
        color={color}
      />
    );
    // Verify the first and the last child view of the day View container and then the second object of the view style array,
    // this second one should match with the passed props
    expect(wrapper.props().children[0].props.children[0].props.style[1]).toMatchObject({ backgroundColor });
    expect(wrapper.props().children[0].props.children[3].props.style[1]).toMatchObject({ backgroundColor });
    // Verify all text elements
    wrapper.find(Text).map(n => expect(n.props().style[1]).toMatchObject({ color }));
  });
});
