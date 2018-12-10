import { get, post, patch, delete_, USERS } from '../utils'

export const USER_REQUEST = 'USER_REQUEST'
export const userRequest = ({
    type: USER_REQUEST,
    isFetching: true
})

export const USER_SUCCESS = 'USER_SUCCESS'
export const userSuccess = (user) => ({
    type: USER_SUCCESS,
    isFetching: false,
    user
})

export const USER_ERROR = 'USER_ERROR'
export const userError = (error) => ({
    type: USER_ERROR,
    isFetching: false,
    error
})


export const fetchUser = () => dispatch =>{
    return get('http://localhost:8000/user', true)
        .then(response => response.json())
        .then(data => {
            dispatch(userSuccess(data))
        })
}

export const USERS_REQUEST = 'USERS_REQUEST'
export const usersRequest = ({
    type: USERS_REQUEST,
    isFetching: true
})

export const USERS_SUCCESS = 'USERS_SUCCESS'
export const usersSuccess = (items) => ({
    type: USERS_SUCCESS,
    isFetching: false,
    items
})

export const USERS_ERROR = 'USERS_ERROR'
export const usersError = (error) => ({
    type: USERS_ERROR,
    isFetching: false,
    error
})


export const fetchUsers = () => dispatch => {
    return get('http://localhost:8000/users', true)
    .then(response => response.json())
    .then(data => {
        dispatch(usersSuccess(data))
    })
}

export const ADD_USER_REQUEST = 'ADD_USER_REQUEST'
export const addUserRequest = ({
    type: ADD_USER_REQUEST,
    isFetching: true
})

export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const addUserSuccess = (response) => ({
    type: ADD_USER_SUCCESS,
    isFetching: false,
    response
})

export const ADD_USER_ERROR = 'ADD_USER_ERROR'
export const addUserError = ({
    type: ADD_USER_ERROR,
    isFetching: false
})
//username, password, first_name, last_name, email, phone_number, user_type
export const fetchAddUser = (data) => dispatch => {
    return post('http://localhost:8000/users/', data)
    .then(response => response.json())
    .then(data => {
        dispatch(addUserSuccess(data))
    })
}

export const EDIT_USER_REQUEST = 'EDIT_USER_REQUEST'
export const editUserRequest = () => ({
    type: EDIT_USER_REQUEST,
    isFetching: true,
    status: 0
})

export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS'
export const editUserSuccess = (response) => ({
    type: EDIT_USER_SUCCESS,
    isFetching: false,
    response,
    status: 1
})

export const EDIT_USER_ERROR = 'EDIT_USER_ERROR'
export const editUserError = (error) => ({
    type: EDIT_USER_ERROR,
    isFetching: false,
    error,
    status: 2
})

export const fetchEditUser = (id, data) => dispatch => {
    dispatch(editUserRequest())
    return patch(USERS + id + '/', data)
    .then(response => response.json().then(json => ({status: response.status, data: json})))
    .then(response => {
        if(response.status){
            dispatch(editUserSuccess(response.data))
        } else {
            dispatch(editUserError(response.data))
        }
    })
}

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST'
export const deleteUserRequest = () => ({
    type: DELETE_USER_REQUEST,
    isFetching: true
})

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const deleteUserSuccess = () => ({
    type: DELETE_USER_SUCCESS,
    isFetching: false,
    status: 1
})

export const DELETE_USER_ERROR = 'DELETE_USER_ERROR'
export const deleteUserError = (error) => ({
    type: DELETE_USER_ERROR,
    isFetching: false,
    status: 2
})


export const USERS_UPDATED = 'USERS_UPDATED'
export const usersUpdated = () => ({
    type: USERS_UPDATED
})

export const DELETE_USER_CLEAR_STATUS = 'DELETE_USER_CLEAR_STATUS'
export const deleteUserClearStatus = () => ({
    type: DELETE_USER_CLEAR_STATUS,
    status: 0
})

export const PUT_USER_CLEAR_STATUS = 'PUT_USER_CLEAR_STATUS'
export const clearPutStatus = () => ({
    type: PUT_USER_CLEAR_STATUS,
    status: 0
})

export const fetchDeleteUser = id => dispatch => {
    dispatch(deleteUserRequest())
    return delete_(USERS, id)
    .then(response => {
        if(response.status){
            dispatch(deleteUserSuccess())
        } else {
            dispatch(deleteUserError())
        }
    })
}
