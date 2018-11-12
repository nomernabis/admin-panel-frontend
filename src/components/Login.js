import React, { Component } from "react"
import { connect } from 'react-redux'

import "../styles/common.css"
import "../styles/Login.css"
import TextField from './common/TextField'
import { fetchLogin } from '../actions'
import { clearError } from '../actions'
import { Redirect, withRouter } from 'react-router-dom'

class Login extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearError = this.clearError.bind(this)
    }
    clearError(){
        this.props.dispatch(clearError())
    }
    handleSubmit(e){
        e.preventDefault()
        const { dispatch } = this.props
        const isUsernameValid = this.refs.username.validate()
        const isPasswordValid = this.refs.password.validate()
        if(isUsernameValid && isPasswordValid){
            //send request
            const username = this.refs.username.getValue()
            const password = this.refs.password.getValue()
            dispatch(fetchLogin({ username, password }))
        }
    }
    render(){
        if(this.props.token){
            localStorage.setItem('token', this.props.token)
            return (<Redirect to="/" />)
        }
        const { error } = this.props
        return (
            <div className="login-page flex flex-center flex-col">
                <div>{ error }</div>
                <div>
                    <TextField error={error != null} ref="username" min={5} max={20} name="username" label="Login" clearError={this.clearError}  isRequired />
                    <TextField error={error != null} ref="password" min={5} max={20} name="password" type="password" clearError={this.clearError} label="Password" isRequired />
                    <button onClick={this.handleSubmit} className="login-button">Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state changed', state)
    return {
        token: state.token,
        error: state.error
    }
}

export default withRouter(connect(mapStateToProps, null)(Login))
