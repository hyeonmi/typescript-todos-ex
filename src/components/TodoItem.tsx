import * as React from 'react'

interface TodoItem {
    id: number
    text: string
    done: boolean
}

interface Props extends TodoItem{
    onToggle: (todoId: number) => void
    onRemove: (todoId: number) => void
}

class TodoItem extends React.Component<Props> {
    render(){
        const {id, text, done, onToggle, onRemove} = this.props
        return(
            <li>
                <b onClick={onToggle}
                   style={{textDecoration: done ? 'line-throught' : 'none'}}>
                    {text}
                </b>
                <span style={{marginLeft:'2'}} onClick={onClickDelete}>Delete</span>
            </li>
        )
    }

    onToggle =  () : void =>{

    }
}


export default TodoItem