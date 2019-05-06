import {combineReducers } from 'redux'
import auth from './auth'
import mechanic from './mechanic'
import service from './service'
export default combineReducers({auth,mechanic,service})