import {
  FC,
  useState,
} from 'react';

import { useDispatch } from 'react-redux';

import './App.css';

import {
  Keyboard,
  WordList,
  Button,
  InputField,
} from './components/';

import { clearPhoneWords, fetchPhoneWordsAsync } from './store/actions';

import styled from 'styled-components';


const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const App: FC = () => {

  const [number, setNumber] = useState('');
  const [inputTerm, setInputTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(fetchPhoneWordsAsync(inputTerm));
    setNumber(inputTerm);
    setInputTerm('');
  }

  const handleClick = (event: any) => {
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
      <div>
        <Keyboard onClick={handleClick} />
        <InputField
          value={inputTerm}
          placeholder='Displays numbers selected'
          onChange={(event: any) => setInputTerm([event.target.value].join(''))}
        />
        <ButtonsContainer>
          <Button
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            onClick={handleClear}
          >
            Clear
          </Button>
        </ButtonsContainer>
      </div>
      <WordList number={number} />
    </div>
  );
}

export default App;
