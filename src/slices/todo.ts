import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
    todoList: Array<string>
}

const initialState: InitialState = {
    todoList: []
}

export const counterSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //submit 、 timeStep
    }
  })
  