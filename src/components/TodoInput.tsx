import * as React from 'react'
import {ITodoInputProps} from '../type'

const todoInput : React.SFC<ITodoInputProps> = ({value, onChange, onInsert}) => {

    const handleKeyPress = (e: React.KeyboardEvent<Element>) => {
        if(e.key === 'Enter'){
            onInsert()
        }
    }
    return (
        <div>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
            <input type='button' onClick={onInsert} value='추가' />
        </div>
    )
}
export default todoInput