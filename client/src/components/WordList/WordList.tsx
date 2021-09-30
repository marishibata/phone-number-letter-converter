import WordListItem from "../WordListItem/WordListItem";

import {
  FC,
} from 'react';

interface WordListProps {
  number: number;
}

const WordList: FC<WordListProps> = ({ number }) => {
  return (
    <div>
      <h2>List of words for number: {number}</h2>
      <WordListItem key={index} item={item} />

    </div>
  )
}

export default WordList;