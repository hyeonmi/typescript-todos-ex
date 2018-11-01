import * as React from 'react'
import * as uuid from 'uuid/v1'
import MainPage from './components/MainPage'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import {ITodo} from './type/index'

interface OwnState {
    input: string
    todos: ITodo []
}
interface Props {
}

class App extends React.Component<Props> {
    state: OwnState
    constructor(props: any){
        super(props)
        this.state = {
            input: "",
            todos: []
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        this.setState({input})
    }

    handleInsert = () => {
        const todo = {
            id: uuid(),
            text: this.state.input,
            done: false
        }
        this.setState({
            todos: [
                ...this.state.todos,
                todo
            ],
            input: ""
        })
    }

    handleToggle = (todoId: string) =>{
        const index = this.state.todos.findIndex((todo: any) => todo.id === todoId)
        const currentTodo = this.state.todos[index]
        const resultTodo = Object.assign(currentTodo, {done: !currentTodo.done})
        const { todos } = this.state

        this.setState({
            todos: [
            ...todos.slice(0, index),
            resultTodo,
            ...todos.slice(index+1)
            ]
        })
    }

    handleRemove = (todoId: string) => {
        const index = this.state.todos.findIndex((todo: any) => todo.id === todoId)
        const { todos } = this.state

        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index+1)
            ]
        })
    }

    render(){
        const {input, todos} = this.state
        return (
            <MainPage>
                <TodoInput value={input} onChange={this.handleChange} onInsert={this.handleInsert}/>
                <TodoList todos={todos} onToggle={this.handleToggle} onRemove={this.handleRemove}/>
            </MainPage>
        )
    }

}

export default App;
