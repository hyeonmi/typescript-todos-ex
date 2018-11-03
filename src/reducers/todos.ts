import { IStoreState, IAction, ITodo } from '../type'
const todos = (state: IStoreState, action: IAction<ITodo>) => {
    const {payload} = action
    switch(action.type){
        case "ADD_TODO":

            return {
                todos: [
                    ...state.todos,
                    {
                        ...action.payload
                    }
                ]
            }
        case "TOGGLE_TODO":

            return state.todos.map((todo: ITodo) => 
                todo.id === payload.id ? { ...todo, done: !todo.done} : todo
            )
        case "REMOVE_TODO":

            const index = state.todos.findIndex((todo: any) => todo.id === payload.id)
        return {
            todos: [
                ...state.todos.slice(0, index),
                ...state.todos.slice(index+1)
            ]
        }
        default:
        return state
    }
}

export default todos