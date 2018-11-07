import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../actions'

function login(state={isFetching: false}, action){
    switch(action.type){
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
        case LOGIN_ERROR:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error
            })
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                token: action.token
            })
        default:
            return state
    }
}

export default login
