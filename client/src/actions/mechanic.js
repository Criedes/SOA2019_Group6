import {LIST_MECHANIC,PROFILE_MECHANIC} from './type'
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

export const loadProfileMechanic = ({id}) => async dispatch =>{
    try{
        // console.log(`${global.GET_PROFILE_MECHANIC}`+'/'+`${id}`)
        const res = await axios.get(`${global.GET_PROFILE_MECHANIC}/${id}`)
        // console.log
        dispatch({
            type: PROFILE_MECHANIC,
            payload: res.data
        })
    }catch(e){
        console.log(e)
    }
}