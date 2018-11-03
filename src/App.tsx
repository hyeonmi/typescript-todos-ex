import * as React from 'react'
import MainPage from './components/MainPage'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

interface Props {
}

class App extends React.Component<Props> {
    render(){
        return (
            <MainPage>
                <TodoInput />
                <TodoList />
            </MainPage>
        )
    }

}

export default App;
