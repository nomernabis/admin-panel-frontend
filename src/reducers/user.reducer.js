import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_ERROR,
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_ERROR,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_ERROR,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
    USERS_UPDATED,
    DELETE_USER_CLEAR_STATUS,
    PUT_USER_CLEAR_STATUS,
    ADD_USER_SUCCESS,
    POST_USER_CLEAR_STATUS
} from '../actions'

function user(state={items:[], isFetching: false, post: {status: 0, isFetching: false}, put: {status: 0, isFetching: false}, delete: {
    isFetching: false,
    status: 0
}, shouldUpdateUsers: false}, action){
    switch(action.type){
        case ADD_USER_SUCCESS:
            return Object.assign({}, state, {
                post: {
                    isFetching: action.isFetching,
                    status: action.status,
                }
            })
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
                delete: {
                    isFetching: action.isFetching
                }
            })
        case DELETE_USER_SUCCESS:
            return Object.assign({}, state, {
                delete: {
                    isFetching: false,
                    status: action.status
                },
                shouldUpdateUsers: true
            })
        case DELETE_USER_ERROR:
            return Object.assign({}, state, {
                delete: {
                    isFetching: false,
                    status: action.status
                }
            })
        case DELETE_USER_CLEAR_STATUS:
            return Object.assign({}, state, {
                delete: {
                    status: action.status
                }
            })
        case EDIT_USER_REQUEST:
            return Object.assign({}, state, {
                put: {
                    isFetching: action.isFetching,
                    status: action.status
                }
            })
        case EDIT_USER_SUCCESS:
            return Object.assign({}, state, {
                put: {
                    isFetching: false,
                    status: action.status,
                    response: action.response
                }
            })
        case EDIT_USER_ERROR:
            return Object.assign({}, state, {
                put: {
                    isFetching: false,
                    status: action.status,
                    error: action.error
                }
            })
        case PUT_USER_CLEAR_STATUS:
            return Object.assign({}, state, {
                put: {
                    status: action.status
                }
            })
        case POST_USER_CLEAR_STATUS:
            return Object.assign({}, state, {
                post: {
                    status: action.status
                }
            })
        default:
            return state
    }
}

export default user
