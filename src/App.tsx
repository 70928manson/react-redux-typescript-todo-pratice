import './App.css';
import styled from 'styled-components'

import { useAppSelector, useAppDispatch } from './hooks';
import { addTimestamp } from './slices/todo';

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 1.5rem;
`

const Title = styled.h2`
  font-weight: 900;
  margin-top: 2rem;
`

const NoteInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: .5rem;
  box-sizing: border-box;
`

const SubmitBtn = styled.button`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px;
  border: 0;
  font-weight: 900;
  margin-top: 1rem;

  :active {
    background: #000000be;
  }
`

const Item = styled.div`
  margin-top: 1rem;

  > b {
    margin-right: .5rem;
  }
`


function App() {
  //store包含reducer，reducer讓state透過store渲染至UI
  //store建立好後，透過selector讓UI知道state的狀態
  //Provider 連結狀態與UI
  const todoReducer = useAppSelector(state => state.todoReducer);
  const todoList = todoReducer.todoList;

  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Title>TODO LIST</Title>
      <NoteInput type="text" />
      <SubmitBtn>
        Submit
      </SubmitBtn>
      <SubmitBtn onClick={() => {
        dispatch(addTimestamp());  //需要slice的action當參數
      }}>
        Record Timestamp
      </SubmitBtn>
      <Title>List</Title>
      {
        todoList.map((data, index) => {
          return (
            <Item key={data}>
              <b>{index + 1}</b>
              {data}
            </Item>
          )
        })
      }
    </Wrapper>
  );
}

export default App;
