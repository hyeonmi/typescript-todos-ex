import * as React from 'react'
import TodoItem from './TodoItem'

interface Props {
    todoItems: []
    onToggle: (todoId: number) => void
    onRemove: (todoId: number) => void
}



class TodoList extends React.Component<Props>{

    render(){
        const {todoItems, onToggle, onRemove} = this.props

        const todoList = todoItems.map((todo: TodoItem) => (
            <TodoItem key={todo.id} text={todo.text} done={todo.done}
                      onToggle={() => onToggle(todo.id)} onRemove={() => onRemove(todo.id)} />
        ))

        return(
            {todoList}
        )
    }

}

export default  TodoList