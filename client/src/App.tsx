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
    dispatch(clearPhoneWords);
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
          onChange={event => setInputTerm([event.target.value].join(''))}
        />
        <Keyboard onClick={handleClick} />
        <WordList number={number}
      </div>
    </div>
  );
}

export default App;
