import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Button from './Button';
import { colors } from '../styles';

describe('Button component', () => {
  it('calls the onClick prop', () => {
    jest.useFakeTimers();
    const buttonClickSpy = jest.fn();

    const wrapper = mount(<Button onClick={buttonClickSpy}>Button</Button>);

    wrapper.find('button').simulate('click');
    
    jest.runAllTimers();

    expect(buttonClickSpy).toHaveBeenCalled();

  });

  it('does not call the onClick prop when in loading state', () => {
    jest.useFakeTimers();
    const buttonClickSpy = jest.fn();

    const wrapper = mount(<Button onClick={buttonClickSpy} loading>Button</Button>);

    wrapper.find('button').simulate('click');
    
    jest.runAllTimers();

    expect(buttonClickSpy).not.toHaveBeenCalled();
  });

  it('does not call the onClick prop when in fade state', () => {
    jest.useFakeTimers();
    const buttonClickSpy = jest.fn();

    const wrapper = mount(<Button onClick={buttonClickSpy} fade>Button</Button>);

    wrapper.find('button').simulate('click');
    
    jest.runAllTimers();

    expect(buttonClickSpy).not.toHaveBeenCalled();
  });

  it('renders the default button', () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toHaveStyleRule('background', colors.green);
    expect(tree).toHaveStyleRule('color', colors.white90);
  });

  it('renders the danger button', () => {
    const tree = renderer.create(<Button danger />).toJSON();

    expect(tree).toHaveStyleRule('background', colors.red);
    expect(tree).toHaveStyleRule('color', colors.white90);
  });

  it('renders the neuralytics button', () => {
    const tree = renderer.create(<Button neuralytics />).toJSON();

    expect(tree).toHaveStyleRule('background', colors.neuralBlue);
    expect(tree).toHaveStyleRule('color', colors.white90);
  });

  it('renders the flat button', () => {
    const tree = renderer.create(<Button flat/>).toJSON();
    
    expect(tree).toHaveStyleRule('color', colors.green);
  });

  it('renders the outline button', () => {
    const tree = renderer.create(<Button outline flat/>).toJSON();
    
    expect(tree).toHaveStyleRule('color', colors.green);
    expect(tree).toHaveStyleRule('border', `1px solid ${colors.green}`);
  });

  it('renders the disabled button', () => {
    const tree = renderer.create(<Button disabled/>).toJSON();
    
    expect(tree).toHaveStyleRule('background', colors.green50);
    expect(tree).toHaveStyleRule('color', colors.white90);  
  });

  it('renders the disabled outline button', () => {
    const tree = renderer.create(<Button disabled outline/>).toJSON();
    
    expect(tree).toHaveStyleRule('background', colors.green50);
    expect(tree).toHaveStyleRule('color', colors.white90);
    expect(tree).toHaveStyleRule('border', `1px solid ${colors.green30}`);
  });
});