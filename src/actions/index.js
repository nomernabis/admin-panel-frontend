import fetch from 'cross-fetch'
import { post } from '../utils'

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const loginRequest = () => ({
    type: LOGIN_REQUEST,
    isFetching: true
})

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    isFetching: false,
    token
})

export const LOGIN_ERROR = "LOGIN_ERROR"
export const loginError = (error) => ({
    type: LOGIN_ERROR,
    isFetching: false,
    error
})

export const fetchLogin = (credentials) => {
    const { username, password } = credentials
    return function(dispatch){
        dispatch(loginRequest())
        return post("http://localhost:8000/auth/", {username, password})
        .then(response => response.json().then(data => ({status: response.status, data})))
        .then(json => {
            console.log('response', json)
            if(json.status){
                dispatch(loginSuccess(json.data))
            } else {
                dispatch(loginError(json.data))
            }
        })
    }
}
