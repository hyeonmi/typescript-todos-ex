import todos from './todos'

import {combineReducers} from 'redux'

const reducers = combineReducers({
    todosData: todos
})

export default reducers