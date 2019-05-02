import {LIST_MECHANIC} from './type'
import global from '../global'
import axios from 'axios'

export const loadMechanic = () => async dispatch =>{
    try{
        const res = await axios.get(global.LOAD_MECHANIC_ALL)
        dispatch({
            type:LIST_MECHANIC,
            payload:res.data
        })
    }catch(e){
        console.log(e)
    }
}