import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type TodoData = {
    completed: boolean
    id: number
    title: string
    userId: number
}

// Define a service using a base URL and expected endpoints
export const todoApiService = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
    //   getPokemonByName: builder.query<Pokemon, string>({
    //     query: (name) => `pokemon/${name}`,
    //   }),
        getTodoList: builder.query<any, string>({
            query: (id) => `todos/${id}`
        })
    }),
})

//發出請求
export  const { useGetTodoListQuery } = todoApiService