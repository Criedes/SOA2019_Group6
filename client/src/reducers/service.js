import { SERVICE_SET } from '../actions/type'

const initialState = {
    mechanic_id: '',
    customer_id: ''
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SERVICE_SET:
            return {
                ...state, mechanic_id: payload.mechanic_id, customer_id: payload.customer_id
            }
        default:
            return state
    }


}