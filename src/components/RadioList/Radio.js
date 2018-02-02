import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../theme';

const RadioLabel = styled.label`

`;

const RadioInput = styled.input`
  display: none;
`;

const RadioCircle = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid black;
  position: relative;

  ${props => props.active && css`
    &:before {
      content: '';
      border-radius: 50%;
      width: 18px;
      height: 18px;
      background-color: ${colors.green};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `} 
`;

const RadioComponent = ({ id, name, label, value, setValue, selectedValue }) => {
  const active = value === selectedValue;

  return (<div>
    <RadioLabel for={name} active={active}>
      <RadioCircle active={active}></RadioCircle>{label}
    </RadioLabel>
    <RadioInput
      type="radio"
      id={id}
      name={name}
      checked={active}
      onChange={setValue(value)}
    />
  </div>);
};

RadioComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  selectedValue: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  setValue: PropTypes.func
};


export default RadioComponent;