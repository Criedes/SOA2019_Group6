import {REGISTER_SUCCESS,LOGOUT, REGISTER_FAIL, REGISTER_CLEAR, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED ,AUTH_ERROR} from '../actions/type'

const initialState = {
    isRegistered : null,
    isAuth : false,
    loading: true,
    user: null
}

export default function(state=initialState , action){
    const {type , payload} = action
    switch(type){
        case REGISTER_SUCCESS:
            return {
                ...state, customer: {...payload}, isRegistered: true , loading:false
            }
        case REGISTER_FAIL:
            return {
                ...state,  isRegistered: false , loading:false
            }
        case LOGIN_SUCCESS:
            // console.log(payload.token)
            localStorage.setItem('token', payload.token)
            return {
                ...state, ...payload , isAuth: true , loading:false
            }
        case USER_LOADED:
            return{
                ...state,
                isAuth:true,
                loading:false,
                user: payload
            }
        case LOGIN_FAIL:
        case LOGOUT:
        case AUTH_ERROR :
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                isAuth:false,
                loading:false,
                user:null
            }
        case REGISTER_CLEAR:
            return {
                ...state, isRegistered: false
            }
        default:
            return state
    }
}