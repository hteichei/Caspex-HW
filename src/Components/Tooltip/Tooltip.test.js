import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './Tooltip';

describe('<Tooltip />', () => {
  const wrapper = shallow(
    <Tooltip>
      <span className="tooltip">
        Picking up your order in store helps cut costs.
      </span>
      <span className="title">Pickup Savings</span>
    </Tooltip>
  );

  it('renders the title', () => {
    expect(wrapper.find('.title').text()).toEqual('Pickup Savings');
  });
  it('renders tip component on mouse hover', () => {
    wrapper.find('.title').simulate('mouseOver');
    expect(wrapper.find('.tooltip').text()).toEqual(
      'Picking up your order in store helps cut costs.'
    );
  });
});
