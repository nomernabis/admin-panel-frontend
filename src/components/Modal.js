import React, { Component } from 'react'
import classNames from 'classnames'

import '../styles/Modal.css'

class Modal extends Component{
    constructor(props){
        super(props)
    }
    render(){
        var modalClass = 'modal-bg '
        console.log('show', this.props.show)
        if(this.props.show){
            modalClass += 'display '
        } else {
            modalClass += 'display-none '
        }
        return(
            <div className={modalClass}>
                <div className="modal flex flex-col flex-center">
                    Are you sure you want to delete?
                    <div className="m-t-16">
                        <button onClick={() => this.props.hideModal()} className="m-r-8">Yes</button>
                        <button onClick={() => this.props.hideModal()}>No</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
