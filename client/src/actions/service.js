import {SERVICE_SET} from '../actions/type'

export const setService = ({mechanic_id , customer_id , mechanic_data , customer_data}) => async dispatch =>{
    try{
        await dispatch({
            type:SERVICE_SET,
            payload:{mechanic_id, customer_id , mechanic_data , customer_data}
        })
    }catch (e){
        console.log(e)
    }
    

}