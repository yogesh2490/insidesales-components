import { mount } from 'enzyme';
import RadioList from './';
import React from 'react';

describe('RadioList', () => {
  let wrapper;
  let value;
  let onChange = (newVal) => { value = newVal };
  let name = 'test-radio';
  let radios;
  beforeEach(() => {
    radios = [];
    value = undefined;

    wrapper = mount(<RadioList
      radios={radios}
      value={value}
      onChange={onChange}
      name={name}
    />);
  });

  it('should output the value when changed', () => {
    wrapper.find('label').click();
    wrapper.update();
    expect(value).toBe(radios[0].value);
  });
});
