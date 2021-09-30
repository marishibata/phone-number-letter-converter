import {
  useState,
  Dispatch,
  SetStateAction,
  FC,
} from 'react';

import {
  IonClick,
} from '../../types';

// interface KeyboardProps {
//   onClick: IonClick;
// }

const Keyboard: FC<{ onClick?: React.MouseEventHandler<HTMLElement> }> = ({ onClick }) => {

  const [active, setIsActive] = useState(false);

  return (
    <div>
      <h2>Keyboard component</h2>
      <div className="key-number" onClick={onClick}>1</div>
      <div className="key-number" onClick={onClick}>2</div>
      <div className="key-number" onClick={onClick}>3</div>
      <div className="key-number" onClick={onClick}>4</div>
      <div className="key-number" onClick={onClick}>5</div>
      <div className="key-number" onClick={onClick}>6</div>
      <div className="key-number" onClick={onClick}>7</div>
      <div className="key-number" onClick={onClick}>8</div>
      <div className="key-number" onClick={onClick}>9</div>
      <div className="key-number" onClick={onClick}>0</div>
    </div >
  )
}

export default Keyboard;