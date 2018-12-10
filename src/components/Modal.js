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
        var buttons = null
        switch (this.props.type) {
            case 'question':
                buttons = (<div className="m-t-16">
                    <button onClick={() => this.props.confirmAction()} className="m-r-8">Yes</button>
                    <button onClick={() => this.props.dispatch(hideModal())}>No</button>
                </div>)
                break;
            case 'info':
                buttons = (
                    <div>
                        <button onClick={() => this.props.dispatch(hideModal())}>OK</button>
                    </div>
                )
                break
            default:
                break
        }
        return(
            <div onClick={(e) => {
                this.props.dispatch(hideModal())
            }} className={modalClass}>
                <div onClick={(event) => event.stopPropagation()} className="modal flex flex-col flex-center">
                    {this.props.text}
                    {buttons}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.user.delete.isFetching,
    confirmAction: state.modal.confirmAction,
    visible: state.modal.visible,
    status: state.user.delete.status,
    type: state.modal.modalType,
    text: state.modal.text
})

export default connect(mapStateToProps, null)(Modal)
