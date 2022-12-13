import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
    todoList: Array<string>
}

const initialState: InitialState = {
    todoList: ["todo..."]  //初始值
}

//redux官網
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //需要的功能: submit 、 timeStep
        //1.state -> 當下狀態
        //2.action -> 對應的動作
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        addTimestamp: (state) => {
            state.todoList.push(Date.now().toString())
        }
    }
  })

  export const { addTodo, addTimestamp } = todoSlice.actions  //定義todoSlice的action給UI用

  export default todoSlice.reducer
  