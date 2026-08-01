import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type Todo = {
    id: number
    text: string
}
type TodoDuzenlePayload = {
    id: number
    text: string
}

type TodoState = {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        todoEkle(state, action: PayloadAction<Todo>) {
            state.todos.push(action.payload)
        },

        todoSil(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )
        },

        todoDuzenle(state, action: PayloadAction<TodoDuzenlePayload>) {
            const bulunanTodo = state.todos.find(
                (todo) => todo.id === action.payload.id
            )

            if (bulunanTodo) {
                bulunanTodo.text = action.payload.text
            }
        }
    }
})

export const { todoEkle, todoSil, todoDuzenle } = todoSlice.actions

export default todoSlice.reducer