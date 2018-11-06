import * as React from 'react'
import {connect} from 'react-redux'
import * as Redux from 'redux'
import * as actions from '../actions'

type OwnProps = {
}

type StateProps = {
    input: {value: string}
}

type DispatchProps = {
    addTodo: (text: string) => {}
}

type Props = StateProps & DispatchProps & OwnProps

interface State {
    input: string
}

class TodoInput extends React.Component<Props, State> {
    state: State
    constructor(props: any){
        super(props)
        this.state = {
            input: ""
        }
    }

    handleKeyPress = (e: React.KeyboardEvent<Element>) => {
        if(e.key === 'Enter'){
            this.handleInsert()
        }
    }

    handleInsert = () => {
        const {input} = this.state
        if(!input){
            return
        }

        if(input.trim() === ""){
            return
        }

        this.props.addTodo(input)
        this.setState({input: ""})
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        this.setState({input: value})
    }

    render(){
        return (
            <div>
                <input value={this.state.input} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
                <input type='button' onClick={this.handleInsert} value='추가' />
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>, ownProps: OwnProps) => ({
    addTodo: (text: string) => dispatch(actions.addTodo(text))
})

export default connect<DispatchProps, OwnProps>(null, mapDispatchToProps)(TodoInput)

