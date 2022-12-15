import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/todo';

import { loggerMiddleware } from './middleware';
import { combineReducers } from "redux";

const reducers = combineReducers({
    todoReducer,
})

const store =  configureStore({
    reducer: reducers,
    middleware: (getCurrentMiddlewares) => {
        return getCurrentMiddlewares().concat(loggerMiddleware);
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
//幫store內容導出一個對應type
export type RootState = ReturnType<typeof reducers>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store