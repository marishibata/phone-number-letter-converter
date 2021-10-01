import WordListItem from "../WordListItem/WordListItem";

import { useSelector, RootStateOrAny } from "react-redux";

import {
  FC,
} from 'react';

interface WordListProps {
  number: string;
}

const WordList: FC<WordListProps> = ({ number }) => {

  const wordList = useSelector((state: RootStateOrAny) => state.lettersData);

  return (
    <div className="wordlist-container">
      <h2>List of letters for number: {number}</h2>
      {wordList.map((item: any, index: any) => (
        <WordListItem key={index} item={item} />
      ))}
    </div>
  )
}

export default WordList;