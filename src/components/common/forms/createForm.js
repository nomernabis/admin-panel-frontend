import React, { Component } from 'react'
import Form from './Form'

function createForm(config){
    return class extends Component{
            constructor(props){
                super(props)
            }

        render(){
            return(
                <Form {...this.props} config={config} />
            )
        }
    }
}


export default createForm
