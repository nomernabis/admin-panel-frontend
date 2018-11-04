import React, { Component } from "react"
import "../styles/common.css"
import "../styles/Login.css"

class Login extends Component{
    render(){
        return (
            <div className="login-page flex flex-center">
                <div>
                    <input className="login-input" placeholder="Login" type="text" /><br />
                    <input className="login-input" placeholder="Password" type="password" /><br />
                    <button className="login-button">Login</button>
                </div>
            </div>
        )
    }
}

export default Login
