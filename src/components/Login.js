import React, { Component } from "react"
import { connect } from 'react-redux'

import "../styles/common.css"
import "../styles/Login.css"
import TextField from './common/TextField'
import { fetchLogin } from '../actions'
import { clearError } from '../actions'

class Login extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearError = this.clearError.bind(this)
    }
    componentDidMount(){
        const { token } = this.props
        console.log('token', token)
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
            const password = this.refs.username.getValue()
            dispatch(fetchLogin({ username, password }))
        }
    }
    render(){
        const { error } = this.props
        return (
            <div className="login-page flex flex-center flex-col">
                <div>{ error }</div>
                <div>
                    <TextField error={error != null} ref="username" min={7} max={20} name="username" label="Login" clearError={this.clearError}  isRequired />
                    <TextField error={error != null} ref="password" min={7} max={20} name="password" type="password" clearError={this.clearError} label="Password" isRequired />
                    <button onClick={this.handleSubmit} className="login-button">Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.token,
    error: state.error
})

export default connect(mapStateToProps, null)(Login)
