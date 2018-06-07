import styled from 'styled-components';

/**
 * Button color constants
 */
const BUTTON_TEXT_COLOR = '#f0f6f5';
const BUTTON_COLOR = '#6f50b5';
const HOVER_BUTTON_COLOR = '#693bd4';
const DISABLED_BUTTON_COLOR = '#a29ab3';

export const Button = styled.div`
  display: inline-block;
  margin: 10px;
  padding: 10px 25px;
  border-radius: 20px;
  color: ${BUTTON_TEXT_COLOR};
  background-color: ${props => props.disabled ? DISABLED_BUTTON_COLOR : BUTTON_COLOR};
  transition: all .35s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.disabled ? DISABLED_BUTTON_COLOR : HOVER_BUTTON_COLOR}
  }
`;
