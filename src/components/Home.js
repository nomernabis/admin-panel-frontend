import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { fetchUsers } from '../actions'
import User from './User'
import Modal from './Modal'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            showModal: false
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }
    componentDidMount(){
        this.props.dispatch(fetchUsers())
    }
    showModal(){
        console.log('show modal')
        this.setState({showModal: true})
    }
    hideModal(){
        this.setState({showModal: false})
    }
    render(){
        if(this.props.isFetching){
            return (
                <div>Loading...</div>
            )
        }
        const users = this.props.users.map(user => <User key={user.id} user={user} deleteClicked={() => this.showModal()} hideModal={this.hideModal} />)
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
                <Modal show={this.state.showModal} hideModal={this.hideModal} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.user.items,
    isFetching: state.user.isFetching
})

export default withRouter(connect(mapStateToProps, null)(Home))
