import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';
import _ from 'lodash';

import { colors, fontFamilies, typography } from '../styles';
import Loader from '../Loader';

export const buttonAnimationTimeSeconds = 2;

const fade = keyframes`
  0%   {
    background: ${colors.green};
    box-shadow: 0 0 2px 0 ${transparentize(.88, colors.black)}, 0 2px 2px 0 ${transparentize(.76, colors.black)};
  }
  100% {
    opacity: 0;
    box-shadow: none;
  }
`;

const ButtonBase = styled.button.attrs({
  background: props => {
    if (props.flat) {
      return 'none';
    }

    if (props.danger) {
      return colors.red;
    }

    if (props.disabled || props.fade) {
      return colors.green50;
    }

    if (props.neuralytics) {
      return colors.neuralBlue;
    }

    return colors.green;
  }
})`

  animation: ${(props) => {
    if (props.fade) {
      return fade;
    }

    return 'none';
  }} ${buttonAnimationTimeSeconds}s;

  background: ${props => props.background};

  transition: filter .25s ease-in-out, box-shadow .25s ease-in-out;
  &:hover {
    background: ${(props) => {
      if (props.flat) {
        return transparentize(.88, colors.green);
      }

      return props.background;
    }};

    filter: ${(props) => {
      if (props.loading || props.fade || props.disabled) {
        return 'none';
      }
      return 'brightness(0.9)';
    }};

    box-shadow: ${(props) => {
      if (props.loading || props.fade || props.disabled || props.flat) {
        return 0;
      }

      return `0 0 2px 0 ${transparentize(.88, colors.black)}, 0 2px 2px 0 ${transparentize(.76, colors.black)}`;
    }};
  }

  &:active {
    background: ${(props) => {
      if (props.flat) {
        return transparentize(.76, colors.green);
      }

      return props.background;
    }};

    box-shadow: ${(props) => {
      if (props.loading || props.fade || props.disabled || props.flat) {
        return 0;
      }

      return `0 0 8px 0 ${transparentize('.88', colors.black)}, 0 8px 8px 0 ${transparentize('.76', colors.black)}`;
    }};
  }

  cursor: ${(props) => {
    if (props.disabled || props.fade || props.loading) {
      return 'default';
    }
    return 'pointer';
  }};

  border: ${(props) => {
    if (props.outline) {
      if (props.disabled) {
        return `1px solid ${colors.green30}`;
      }
      return `1px solid ${colors.green}`;
    }
    return 'none';
  }};

  border-radius: 2px;
  color: ${(props) => {
    if (props.flat) return colors.green;

    return colors.white90;
  }};

  height: 36px;
  line-height: 24px;
  outline: 0;

  width: auto;
  min-width: 88px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredSpan = styled.span`
  width: 100%;
  height: 100%;

  display: flex;
  flex: 0 0 auto;
  flex-shrink: none;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  font-family: ${fontFamilies.roboto};
  ${typography.body2}

  filter: none;

  padding: 0;
  margin: 0;
`;

export const Button = ({ children, className, loading, onClick, type, ...props }) => {
  
  const debouncedOnClick = _.debounce(onClick, 175);

  const onBtnClick = () => {
    if (!loading && !props.fade && onClick) {
      debouncedOnClick();
    }
  }

  return (
    <ButtonBase
      className={className}
      loading={loading}
      onClick={onBtnClick}
      type={type}
      {...props}
    >
      <span>
        {loading ? (
          <Loader white small />
        ) : (
          <CenteredSpan>
            {children}
          </CenteredSpan>
        )}
      </span>
    </ButtonBase>
  );
};

Button.defaultProps = {
  disabled: false,
  onClick: _.identity,
  type: 'button'
};

Button.PropTypes = {
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  fade: PropTypes.bool,
  flat: PropTypes.bool,
  neuralytics: PropTypes.bool,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Button;
