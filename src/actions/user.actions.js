import { get } from '../utils'

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
    return post('http://localhost:8000/users', data)
    .then(response => response.json())
    .then(data => {
        dispatch(addUserSuccess(data))
    })
}
