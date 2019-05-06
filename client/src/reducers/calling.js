import {CALLING_SUCCESS , RESET_CALLING_STATUS} from '../actions/type'

const initialState = {
    isServiceSuccess: false
}

export default function(state=initialState , action){
    const {type , payload} = action
    switch(type){
        case CALLING_SUCCESS:
            return {...state , isServiceSuccess:true}

        case RESET_CALLING_STATUS:
            return {...state, isServiceSuccess:false}
        default:
            return {...state}
    }
}