import {IStoreState, IAction} from '../type'

const input = (state: IStoreState, action: IAction) => {
    switch(action.type){
        case 'SET_INPUT':
            return state.input = action.payload.input
        default:
            return state;
    }
}

export default input