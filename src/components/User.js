import React, { Component } from 'react'

class User extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {username, first_name, last_name, email, phone_number, user_type} = this.props
        return (
            <div className="table-row">
                <div>{username}</div>
                <div>{first_name}</div>
                <div>{last_name}</div>
                <div>{email}</div>
                <div>{phone_number}</div>
                <div>{user_type}</div>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}

export default User
