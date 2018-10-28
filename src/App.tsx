import * as React from 'react'
import TodoList from './components/TodoList'

interface Props{

}

interface State {
    todoItems: TodoItemData[]
    input: string
}

class App extends React.Component<Props, State> {
  public render() {
    return (
        <TodoList onToggle={this.onToggle} onRemove={this.onRemove}/>
    );
  }

    onToggle = (id: number) : void => {
        const {todoItems} = this.state
        const index = todoItems.findIndex(todo => todo.id === id)
        const toggled = {
            ...todoItems[index],
            done: !todoItems[index].done
        }

        this.setState({
            todoItems: [
                ...todoItems.slice(0, index),
                toggled,
                ...todoItems.slice(index+1, todoItems.length)
            ]
        })
    }

    onRemove = (id: number) : void => {
        const {todoItems} = this.state
        const index = todoItems.findIndex(todo => todo.id === id)

        this.setState({
            todoItems: [
                ...todoItems.slice(0, index),
                ...todoItems.slice(index+1, todoItems.length)
            ]
        })
    }
}

export default App;
