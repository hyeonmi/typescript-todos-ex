import { combineReducers } from 'redux'
import todos from './todos'
import input from './input'

const reducers = combineReducers({
    todos,
    input
})

export default reducers