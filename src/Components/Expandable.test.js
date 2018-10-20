import React from 'react';
import { shallow } from 'enzyme';
import Expandable from './Expandable';

describe('<Expandable />', () => {
  const wrapper = shallow(
    <Expandable showTitle="See Item Details" hideTitle="Hide Item Details">
      <p className="content">Essentials</p>
    </Expandable>
  );

  it('renders a button to expand content', () => {
    console.log(wrapper.debug());
    expect(wrapper.find('button').text()).toEqual('See Item Details +');
  });
  it('renders children when toggle button is pressed', () => {
    console.log(wrapper.debug());
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.content').text()).toEqual('Essentials');
  });
});
