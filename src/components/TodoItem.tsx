import * as React from 'react'
import {ITodoItemProps} from '../type/index'

class TodoItem extends React.Component<ITodoItemProps> {
    render(){
        const {todo, onToggle, onRemove} = this.props
        const {id, text, done} = todo
        const handleToggle = () => {onToggle(id)}
        const handleRemove = () => {onRemove(id)}

        return(
            <div>
                <input type="checkbox" checked={done} readOnly={true} onClick={handleToggle} />
                <span style={{textDecoration: done ? 'line-through':''}}>{text}</span>
                <span onClick={handleRemove}>  [delete]</span>
            </div>
        )
    }
}
export default TodoItem