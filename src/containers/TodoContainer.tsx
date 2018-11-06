import * as React from 'react'
import { connect } from 'react-redux';
import {removeTodo, toggleTodo} from '../actions'
import TodoList from '../components/TodoList'
import {ITodos} from '../reducers/todos'

interface OwnProps {
}

interface StateProps {
    todosData: ITodos
}

interface DispatchProps {
    removeTodo: (id: string) => {}
    toggleTodo: (id: string) => {}
}

type Props = StateProps & DispatchProps & OwnProps

class TodoContainer extends React.Component<Props> {
    render() {
        const {todosData, removeTodo, toggleTodo} = this.props
        return(
            <div>
                 <TodoList {...{removeTodo, toggleTodo}} todos={todosData.todos}/>
            </div>
        )
    }
}

const mapStateToProps = (state: StateProps) : StateProps => ({
    todosData: state.todosData
})

const mapDispatchToProps = (dispatch: any) : DispatchProps => ({
    removeTodo: (id: string) => dispatch(removeTodo(id)),
    toggleTodo: (id: string) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)