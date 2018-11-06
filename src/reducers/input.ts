import {IStoreState, IAction, IInput} from '../type'

type input = (state: IStoreState, action: IAction<IInput>) => {
    // switch(action.type){
    //     case 'SET_INPUT':
    //         return state.input = action.payload.input
    //     default:
    //         return state;
    // }
}

export default input