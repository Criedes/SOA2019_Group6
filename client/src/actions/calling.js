import {CALLING_SUCCESS,RESET_CALLING_STATUS} from '../actions/type'


export const callSuccess = () => async dispatch =>{
    try{
        dispatch({
            type:CALLING_SUCCESS,
        })

        dispatch({
            type:RESET_CALLING_STATUS
        })
    }catch(e){
        console.log(e)
    }
}