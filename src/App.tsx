import './App.css';
import styled from 'styled-components'

import { useAppSelector, useAppDispatch } from './hooks';
import { addTodo, addTimestamp } from './slices/todo';

import { useState } from 'react';

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

  const [text, setText] = useState("")

  const dispatch = useAppDispatch();

  //slice - store(export ts類型) - reducer -action - dispatch - 橋梁provider - hooks(ts定義)

  return (
    <Wrapper>
      <Title>TODO LIST</Title>
      <NoteInput type="text" value={text} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
      }}/>
      <SubmitBtn onClick={() => {
        if (text === "") {
          alert("請輸入內容");
          return;
        }
        dispatch(addTodo(text));  //payload
        setText("");
      }}>
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
