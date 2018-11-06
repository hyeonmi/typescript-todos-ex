import * as React from 'react'

export interface IMainPageProps {
    children?: React.ReactNode
}

class MainPage extends React.Component<IMainPageProps>{
    render(){
        const {children} = this.props
        return (
            <div>
                <h1>Todo List</h1>
                <div>
                    {children}
                </div>
            </div>
        )
    }
}

export default MainPage