import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/todo';

const store =  configureStore({
    reducer: {
        todoReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
//幫store內容導出一個對應type
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store