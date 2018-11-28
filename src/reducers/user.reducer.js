import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_ERROR,
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_ERROR
} from '../actions'

function user(state={items:[], isFetching: false}, action){
    switch(action.type){
        case USER_REQUEST:
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
        case USER_SUCCESS:
            return Object.assign({}, state, {
                user: action.user,
                isFetching: action.isFetching
            })
        case USER_ERROR:
        case USERS_ERROR:
            return Object.assign({}, state, {
                error: action.error,
                isFetching: action.isFetching
            })
        case USERS_REQUEST:
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
        case USERS_SUCCESS:
            return Object.assign({}, state, {
                items: action.items,
                isFetching: action.isFetching
            })
        default:
            return state
    }
}

export default user
