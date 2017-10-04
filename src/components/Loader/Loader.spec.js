import React from 'react';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Loader from './Loader';
import { colors } from '../styles';

describe('Loader component', () => {
  it('renders the default Loader component', () => {
    const tree = renderer.create(<Loader />).toJSON();
    console.log(tree)
    expect(tree).toHaveStyleRule('width', '80px', {
      width: '20px',
      backgroundColore: colors.green
    });
  });

  it('renders the white Loader component', () => {
    const tree = renderer.create(<Loader white />).toJSON();
    console.log(tree)
    expect(tree).toHaveStyleRule('width', '80px', {
      width: '20px',
      backgroundColore: colors.white
    });
  });

  it('renders the medium Loader component', () => {
    const tree = renderer.create(<Loader medium />).toJSON();
    console.log(tree)
    expect(tree).toHaveStyleRule('width', '55px', {
      width: '18px',
      backgroundColore: colors.green
    });
  });

  it('renders the small Loader component', () => {
    const tree = renderer.create(<Loader small />).toJSON();
    console.log(tree)
    expect(tree).toHaveStyleRule('width', '40px', {
      width: '10px',
      backgroundColore: colors.green
    });
  });
});