import {
  FC,
  useState,
  ChangeEvent,
} from 'react';

import { useDispatch } from 'react-redux';

import './App.css';

import {
  InputField,
  Keyboard,
  WordList,
  Button,
} from './components/';

import { clearPhoneWords, fetchPhoneWordsAsync } from './store/actions';

const App: FC = () => {

  const [number, setNumber] = useState('');
  const [inputTerm, setInputTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(fetchPhoneWordsAsync(inputTerm));
    setNumber(inputTerm);
    setInputTerm('');
  }

  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTerm([...inputTerm, event.target.innerText].join(''))
  }

  const handleClear = () => {
    setInputTerm('');
    setNumber('');
    dispatch(clearPhoneWords());
  }

  return (
    <div className="app">
      <div className="header-text">
        Phonewords Converter
      </div>
      <div className="app-container">
        app-container.css
        <InputField
          value={inputTerm}
          placeholder='Enter digits'
          onChange={(event: any) => setInputTerm([event.target.value].join(''))}
        />
        <Keyboard onClick={handleClick} />
        <Button
          onClick={handleSubmit}
          text="Submit"
          color="#00896C"
        />
        <Button
          onClick={handleClear}
          text="Clear"
          color="#B19663"
        />
      </div>
      <WordList number={number} />
    </div>
  );
}

export default App;
