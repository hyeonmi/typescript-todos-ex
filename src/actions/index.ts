import * as uuid from 'uuid/v1'

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

type AddTodo = { type: typeof ADD_TODO, payload: {text: string, id: string}}
type ToggleTodo = { type: typeof TOGGLE_TODO, payload: {id: string}}
type RemoveTodo = { type: typeof REMOVE_TODO, payload: {id: string}}

const addTodo = (text: string) : AddTodo => {
    return {
        type: ADD_TODO,
        payload: {
            text,
            id: uuid()
        }
    }
}

const toggleTodo = (id: string) : ToggleTodo => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

const removeTodo = (id: string) : RemoveTodo => {
    return {
        type: REMOVE_TODO,
        payload: {
            id
        }
    }
}

export type Actions = AddTodo | ToggleTodo | RemoveTodo