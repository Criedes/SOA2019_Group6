import {LIST_MECHANIC , PROFILE_MECHANIC} from '../actions/type'


const initialState = {
    mechanic_list : [],
    mechanic : {}
}

export default function(state=initialState, action){
    const {type , payload} = action
    switch(type){
        case LIST_MECHANIC:
            return {
                ...state,
                mechanic_list: payload
            }
        case PROFILE_MECHANIC:
            return {
                ...state,
                mechanic : payload
            }
        default:
            return{
                ...state
            }
    }

}