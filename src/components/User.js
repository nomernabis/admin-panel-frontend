import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDeleteUser } from '../actions'

class User extends Component{
    constructor(props){
        super(props)
        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.confirmAction = this.confirmAction.bind(this)
    }
    handleEditClick(e){
        e.preventDefault()
        const { history, user } = this.props
        localStorage.setItem('/users/' + user.id, JSON.stringify(user))
        history.push('/users/edit/' + user.id)
    }
    handleDeleteClick(e){
        this.props.showModal(this.confirmAction)
    }
    confirmAction(){
        console.log('confirmAction clicked', this.props)
        const { dispatch, user} = this.props
        dispatch(fetchDeleteUser(user.id))
    }
    render(){
        const {username, first_name, last_name, email, phone_number, user_type} = this.props.user
        return (
            <div className="table-row">
                <div>{username}</div>
                <div>{first_name}</div>
                <div>{last_name}</div>
                <div>{email}</div>
                <div>{phone_number}</div>
                <div>{user_type}</div>
                <div>
                    <button onClick={this.handleEditClick}>Edit</button>
                    <button onClick={this.handleDeleteClick}>Delete</button>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(User))
