import { FC } from "react";

import "../Buttons/Button.css";

interface ButtonProps {
  button: any,
  onClick?: React.MouseEventHandler<HTMLElement>,
  color: string,
}

const Button: FC<ButtonProps> = ({ button, onClick, color }) => {

  return (
    <div className="button" onClick={onClick} color={color}>{button}</div>
  )

}

export default Button;