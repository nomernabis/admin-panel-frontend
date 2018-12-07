import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'

import { fetchDeleteUser, hideModal, deleteUserClearStatus, fetchUsers } from '../actions'

import '../styles/Modal.css'

class Modal extends Component{
    constructor(props){
        super(props)
    }
    render(){
        var modalClass = 'modal-bg '
        if(this.props.visible){
            modalClass += 'display '
        } else {
            modalClass += 'display-none '
        }
        if(this.props.status == 1){
            this.props.dispatch(hideModal())
            this.props.dispatch(deleteUserClearStatus())
            this.props.dispatch(fetchUsers())
        }
        console.log('confirmAction', this.props)
        return(
            <div className={modalClass}>
                <div className="modal flex flex-col flex-center">
                    Are you sure you want to delete?
                    <div className="m-t-16">
                        <button onClick={() => this.props.confirmAction()} className="m-r-8">Yes</button>
                        <button onClick={() => this.props.dispatch(hideModal())}>No</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.user.deleteUser.isFetching,
    confirmAction: state.modal.confirmAction,
    visible: state.modal.visible,
    status: state.user.deleteUser.status
})

export default connect(mapStateToProps, null)(Modal)
