import * as uuid from 'uuid/v1'
import {ActionTypes} from './ActionTypes'

type AddTodo = { type: typeof ActionTypes.ADD_TODO, text: string, id: string, done: boolean }
type ToggleTodo = { type: typeof ActionTypes.TOGGLE_TODO, id: string}
type RemoveTodo = { type: typeof ActionTypes.REMOVE_TODO, id: string}

export const addTodo = (text: string) : AddTodo => {
    return {
        text,
        type: ActionTypes.ADD_TODO,
        id: uuid(),
        done: false
    }
}

export const toggleTodo = (id: string) : ToggleTodo => {
    return {
        id,
        type: ActionTypes.TOGGLE_TODO,
    }
}

export const removeTodo = (id: string) : RemoveTodo => {
    return {
        id,
        type: ActionTypes.REMOVE_TODO,
    }
}

export type TodoAction = AddTodo | ToggleTodo | RemoveTodo