import { FC } from "react";

import "../Buttons/Buttons.css";

interface ButtonProps {
  button: any,
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Button: FC<ButtonProps> = ({ button, onClick }) => {

  return (
    <div className="button" onClick={onClick}>{button}</div>
  )

}

export default Button;