import {ActionTypes} from '../actions/ActionTypes'
import {TodoAction} from '../actions'

export interface Todo {
    id: string,
    text: string,
    done: boolean
}

export interface ITodos {
    todos: Todo[]
}

const initailState : ITodos = {
    todos: []
}

const todos = (state: ITodos = initailState, action: TodoAction) : ITodos => {

    switch(action.type){
        case ActionTypes.ADD_TODO:{
            const {id, text, done} = action
            return {
                todos: [
                    ...state.todos,
                    {
                        id,
                        text,
                        done
                    }
                ]            
            }
        }
        case ActionTypes.TOGGLE_TODO:{
            const nextTodos = state.todos.map((todo: any) =>
                todo.id === action.id ? { ...todo, done: !todo.done} : todo
            )
            return {
                todos: nextTodos
            }
        }
        case ActionTypes.REMOVE_TODO:{
            const index = state.todos.findIndex((todo: any) => todo.id === action.id) || state.todos.length
            return {
                todos: [
                    ...state.todos.slice(0, index),
                    ...state.todos.slice(index + 1)
                ]
        }
        }
        default:
        return state
    }
}
export default todos