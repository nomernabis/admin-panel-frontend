import React, { Component } from "react"
import { connect } from 'react-redux'

import "../styles/common.css"
import "../styles/Login.css"
import TextField from './common/TextField'
import { fetchLogin } from '../actions'

class Login extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        const { token } = this.props
        console.log('token', token)
    }
    handleSubmit(e){
        e.preventDefault()
        this.refs.username.validate()
        this.refs.password.validate()
        const { dispatch } = this.props
        if(!this.refs.username.getError() && !this.refs.password.getError()){
            //send request
            const username = this.refs.username.getValue()
            const password = this.refs.username.getValue()
            dispatch(fetchLogin({ username, password }))
        }
    }
    render(){
        return (
            <div className="login-page flex flex-center">
                <div>
                    <TextField ref="username" min={7} max={20} name="username" label="Login"  isRequired />
                    <TextField ref="password" min={7} max={20} name="password" type="password"  label="Password" isRequired />
                    <button onClick={this.handleSubmit} className="login-button">Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.token
})

export default connect(mapStateToProps, null)(Login)
