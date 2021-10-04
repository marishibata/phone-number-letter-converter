import {
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react';

import "../InputField/InputField.css";
import styled from 'styled-components';


const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  width: 100%;
  height: 50px;
  font-size: 17px;
  color: #545454;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  ::placeholder {
    color: gainsboro;
  }
  @media screen and (max-width: 600px) {
    height: 40px;
  }
`

interface InputFieldProps {
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
    const charsAllowed = new RegExp('^[2-9]+$')
    if (!charsAllowed.test(event.key)) {
      event.preventDefault()
    }
  }

  return (
    <div>
      <h3>Number Entered</h3>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
    </div>

  )

}

export default InputField;