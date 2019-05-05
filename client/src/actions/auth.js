import axios from 'axios'
import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    REGISTER_CLEAR , 
    LOGIN_SUCCESS , 
    LOGIN_FAIL, 
    USER_LOADED, 
    AUTH_ERROR,
    LOGOUT } from './type'
import global from '../global'
import setAuthToken from '../utils/setAuthToken'

//Load User
export const loadUser = () => async dispatch =>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

    try{
        const res = await axios.get(global.AUTH_PATH)
        dispatch({
            type:USER_LOADED,
            payload:res.data
        })
    }catch(e){
        console.log(e)
        dispatch({
            type:AUTH_ERROR,
        })
        
    }
   
}

//Login User
export const loginCustomer = ({ username, password }) => async dispatch => {
    try {
        const config = {
            header: {
                'Content-type': 'Application/json'
            }
        }
        const res = await axios.post(global.LOGIN_PATH_CUSTOMER, {username,password}, config)
        // console.log(res.data)
        await dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })

        dispatch(loadUser())
    } catch (e) {
        dispatch({
            type:LOGIN_FAIL
        })
    }
}

export const loginMechanic = ({username, password}) => async dispatch =>{
    try {
        const config = {
            header: {
                'Content-type': 'Application/json'
            }
        }
        const res = await axios.post(global.LOGIN_PATH_MECHANIC, {username,password}, config)
        // console.log(res.data)
        await dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })

        dispatch(loadUser())
    } catch (e) {
        dispatch({
            type:LOGIN_FAIL
        })
    }
}


//Register 
export const register = ({ name, username, password, phone }) => async dispatch => {
    try {
        const config = {
            header: {
                'Content-type': 'Application/json'
            }
        }
        const res = await axios.post(global.REGISTER_PATH_CUSTOMER, {name, username, password, phone}, config)
        // console.log(res.data)
        await dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })

        //clear register after redirect page
        await dispatch({
            type:REGISTER_CLEAR
            // payload:res.data
        })

        

    } catch (e) {
        console.log(e)
        dispatch({
            type:REGISTER_FAIL
        })
    }
}

//LOGOUT /CLEAR
export const logout = () => dispatch => {
    dispatch({
        type:LOGOUT
    })
}
