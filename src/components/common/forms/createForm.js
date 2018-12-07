import React, { Component } from 'react'

import Form from './Form'

function createForm(config, actions){
    return class extends Component{
            constructor(props){
                super(props)
            }

        render(){
            return(
                <Form
                    config={config}
                    actions={actions}
                    {...this.props}
                 />
            )
        }
    }
}


export default createForm
