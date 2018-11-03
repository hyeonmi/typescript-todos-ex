import * as uuid from 'uuid/v1'

export const addTodo = (text: string) => ({
    type: 'ADD_TODO',
    id: uuid(),
    text
})

export const toggleTodo = (id: string) => ({
    type: 'TOGGLE_TODO',
    id
})