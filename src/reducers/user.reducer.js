import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_ERROR,
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_ERROR,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
    USERS_UPDATED,
    DELETE_USER_CLEAR_STATUS
} from '../actions'

function user(state={items:[], isFetching: false, deleteUser: {
    isFetching: false,
    status: 0
}, shouldUpdateUsers: false}, action){
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
                isFetching: action.isFetching,
                shouldUpdateUsers: false
            })
        case USERS_UPDATED:
            return Object.assign({}, state, {
                shouldUpdateUsers: false
            })
        case DELETE_USER_REQUEST:
            return Object.assign({}, state, {
                deleteUser: {
                    isFetching: action.isFetching
                }
            })
        case DELETE_USER_SUCCESS:
            return Object.assign({}, state, {
                deleteUser: {
                    isFetching: false,
                    status: action.status
                },
                shouldUpdateUsers: true
            })
        case DELETE_USER_ERROR:
            return Object.assign({}, state, {
                deleteUser: {
                    isFetching: false,
                    status: action.status
                }
            })
        case DELETE_USER_CLEAR_STATUS:
            return Object.assign({}, state, {
                deleteUser: {
                    status: action.status
                }
            })
        default:
            return state
    }
}

export default user
