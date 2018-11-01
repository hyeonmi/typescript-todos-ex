import * as React from 'react'
import TodoItem from './TodoItem'
import {ITodoListProps} from '../type/index'

const todoList : React.SFC<ITodoListProps> = ({todos, onToggle, onRemove}) => {

    const todoList = todos.map((todo: any) => {
        return(
            <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove}/>
        )
    })
    
    return (
        <div>
            {todoList}
        </div>
    )
}

export default todoList