import * as React from 'react'
import MainPage from './containers/MainPage'
import TodoInput from './components/TodoInput'
import TodoContainer from './containers/TodoContainer'

interface Props {
}

class App extends React.Component<Props> {
    render(){
        return (
            <MainPage>
                <TodoInput />
                <TodoContainer />
            </MainPage>
        )
    }
}

export default App;
