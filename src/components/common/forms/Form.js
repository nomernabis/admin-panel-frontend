import React, { Component } from 'react'
import TextField from '../TextField'


class Form extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        const self = this
        this.props.config.fields.forEach(function(f){
            self.refs[f.name].validate()
        })
    }
    render(){
        const { config } = this.props
        //ref, name, label, type
        const fields = config.fields.map(field => <div><TextField ref={field.name} name={field.name} label={field.label} type={field.type} isRequired={field.isRequired} /></div>)
        return(
            <form onSubmit={this.handleSubmit} noValidate>
                {fields}
                <input className="login-button"  type="submit" value="Add" />
            </form>
        )
    }
}

export default Form
