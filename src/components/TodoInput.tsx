import * as React from 'react'
import {connect} from 'react-redux'
import * as Redux from 'redux'
import {addTodo} from '../actions'


export interface OwnProps {
}
  
interface StateProps {
    
}
       
interface DispatchProps {
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

    _handleKeyPress = (e: React.KeyboardEvent<Element>) => {
        if(e.key === 'Enter'){
            this._handleInsert()
        }
    }

    _handleInsert = () => {
        const {input} = this.state
        if(!input){
            return
        }

        if(input.trim() === ""){
            return
        }
    }

    render(){
        return (
            <div>
                <input value={this.state.input} onKeyPress={this._handleKeyPress} />
                <input type='button' onClick={this._handleInsert} value='추가' />
            </div>
        )
    }

}

const mapStateToProps = (state: State) => ({
    input: state.input
});
  
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>, ownProps: OwnProps) => ({
    handleClick: dispatch(addTodo())
})
    
export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(TodoInput)

