import '../Keyboard/Keyboard.css';

import {
  FC,
  useState,
} from 'react';

interface KeyboardProps {
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Keyboard: FC<KeyboardProps> = ({ onClick }) => {

  return (
    <div>
      <h3>Click to select numbers</h3>
      <div className="keypad-container" >
        <div className="keypad-number" onClick={onClick}>1</div>
        <div className="keypad-number" onClick={onClick}>2</div>
        <div className="keypad-number" onClick={onClick}>3</div>
        <div className="keypad-number" onClick={onClick}>4</div>
        <div className="keypad-number" onClick={onClick}>5</div>
        <div className="keypad-number" onClick={onClick}>6</div>
        <div className="keypad-number" onClick={onClick}>7</div>
        <div className="keypad-number" onClick={onClick}>8</div>
        <div className="keypad-number" onClick={onClick}>9</div>
        <div className="keypad-number" onClick={onClick}>0</div>
      </div>
    </div>

  )
}

export default Keyboard;