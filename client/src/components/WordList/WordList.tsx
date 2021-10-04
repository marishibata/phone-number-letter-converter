import WordListItem from "../WordListItem/WordListItem";

import { useSelector, RootStateOrAny } from "react-redux";

import styled from "styled-components";

import {
  FC,
} from 'react';

const Container = styled.div`
  width: 80%;
  margin: 2rem 0;
  margin-left: auto;
  margin-right: auto;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

interface WordListProps {
  number: string;
}

const WordList: FC<WordListProps> = ({ number }) => {

  const wordList = useSelector((state: RootStateOrAny) => state.lettersData);

  return (
    <div>
      <Container>
        <h2 className="h2">List of letters for number: {number}</h2>
        <ListContainer>
          {wordList && wordList.map((item: any, index: any) => (
            <WordListItem key={index} item={item} />
          ))}
        </ListContainer>
      </Container>
    </div>
  )
}

export default WordList;