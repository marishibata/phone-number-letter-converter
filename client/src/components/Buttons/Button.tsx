import { FC } from "react";
import styled, { css } from 'styled-components';

const buttonDisabled = css`
  opacity: 0.7;
  cursor: not-allowed;
`

const getButtonStyles = (props: any) => {
  if (props.disabled) return buttonDisabled;
}

const Container = styled.button`
  min-width: 85px;
  width: auto;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  height: 50px;
  padding: 0 1rem;
  text-align: center;
  border: none;
  outline: none;
  margin: 2rem;

  ${getButtonStyles}
`

interface ButtonProps {
  children: any,
  onClick?: React.MouseEventHandler<HTMLElement>,
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {

  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  )

}

export default Button;