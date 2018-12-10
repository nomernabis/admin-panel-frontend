import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { fetchUsers, showModal, hideModal } from '../actions'
import User from './User'
import Modal from './Modal'

class Home extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getUsers()
    }
    render(){
        if(this.props.isFetching){
            return (
                <div>Loading...</div>
            )
        }
        const users = this.props.users.map(user => <User key={user.id} user={user} showModal={this.props.showModal} hideModal={this.props.hideModal} />)
        return(
            <div className="flex flex-center-horizontal">
                <div className="table">
                    <div className="table-header">
                        <div>
                            Username
                        </div>
                        <div>
                            Firstname
                        </div>
                        <div>
                            Lastname
                        </div>
                        <div>
                            Email
                        </div>
                        <div>
                            Phone Number
                        </div>
                        <div>
                            User Type
                        </div>
                        <div>
                            Actions
                        </div>
                    </div>
                    {users}
                    <div className="table-button">
                        <button onClick={() => this.props.history.push('/users/add')}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.user.items,
    isFetching: state.user.isFetching,
})

const mapDispatchToProps = (dispatch) => ({
    showModal: (type, text, confirmAction) => dispatch(showModal(type, text, confirmAction)),
    hideModal: () => dispatch(hideModal()),
    getUsers: () => dispatch(fetchUsers())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
