import WordListItem from "../WordListItem/WordListItem";

import { useSelector } from "react-redux";

import {
  FC,
} from 'react';

interface WordListProps {
  number: number;
}

const WordList: FC<WordListProps> = ({ number }) => {

  const wordList = useSelector(state => state.lettersData);

  return (
    <div className="wordlist-container">
      <h2>List of words for number: {number}</h2>
      {wordList.map((item: any, index: any) => (
        <WordListItem key={index} item={item} />
      ))}
    </div>
  )
}

export default WordList;