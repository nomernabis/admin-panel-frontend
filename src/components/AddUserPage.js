import React, { Component } from 'react'
import { UserForm } from './common/forms'

class AddUserPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="login-page flex flex-center flex-col">
                <UserForm />
            </div>
        )
    }
}

export default AddUserPage
