import * as React from 'react'
import TodoItem from './TodoItem'
import {Todo} from '../reducers/todos'

interface TodoList {
    todos : Todo[],
    toggleTodo: (id: string) => {}
    removeTodo: (id: string) => {}
}

const todoList : React.SFC<TodoList> = ({todos, toggleTodo, removeTodo}) => {
    return(
        <div>
            {todos.map((todo: any) => <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onRemove={removeTodo}/>)}
        </div>
    )
}

export default todoList