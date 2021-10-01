import { FC } from 'react';

import '../WordListItem/WordListItem.css';

interface WordListItemProps {
  item: any;
}

const WordListItem: FC<WordListItemProps> = ({ item }) => {
  return (
    <div className="wordlistitem-container">
      {item}
    </div >
  )
}

export default WordListItem;