import {
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react';

import "../InputField/InputField.css";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  value: any;
  placeholder: string;
  onChange: any;
}

const InputField: FC<InputFieldProps> = ({
  value,
  placeholder,
  onChange,
}) => {

  const handleKeyPress = (event: KeyboardEvent) => {
    const charAllowed = new RegExp('^[2-9]+$')
    if (!charAllowed.test(event.key)) {
      event.preventDefault()
    }
  }

  return (
    <div>
      <h3>Enter number</h3>
      <div
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      >
      </div>
    </div >

  )

}

export default InputField;