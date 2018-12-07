import React, { Component } from 'react'
import { UserForm } from './common/forms'

class UserFormPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="login-page flex flex-center flex-col">
                <UserForm {...this.props} />
            </div>
        )
    }
}

export default UserFormPage
