import * as React from 'react'

// type TodoItem = {
//     todo : any,
//     onToggle: (id: string) => {}
//     onRemove: (id: string) => {}
// }

const todoItem : React.SFC<any> = ({todo, onToggle, onRemove}) => {
    const {text, done, id} = todo
    const handleToggle = () => onToggle(id)
    const handleRemove = () => onRemove(id)
    return (
            <div>
                <input type="checkbox" checked={done} readOnly={true} onClick={handleToggle} />
                <span style={{textDecoration: done ? 'line-through':''}}>{text}</span>
                <span onClick={handleRemove}>  [delete]</span>
            </div>
    )
}
export default todoItem