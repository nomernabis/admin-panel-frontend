import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '../TextField'
import { connect } from 'react-redux'

class Form extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        const self = this
        var isValid = true
        var data = {}
        this.props.config.fields.forEach(function(f){
            if(f.methods.indexOf(this.props.method) != -1){
                isValid = self.refs[f.name].validate() && isValid
                if(isValid){
                    data[f.name] = self.refs[f.name].getValue()
                }
            }
        })
        if(isValid){
            if(this.props.method==='put'){
                this.props.dispatch(this.props.actions.put.action(this.props.match.params.id, data))
            } else {
                this.props.dispatch(this.props.actions.post.action(data))
            }
        } else {
            console.log('form is not valid', data)
        }
    }
    render(){
        const { config } = this.props
        //ref, name, label, type
        var data = null
        console.log('props', this.props)
        if(this.props.method==='put'){
            const user = localStorage.getItem('/users/' + this.props.match.params.id)
            if(user){
                data = JSON.parse(user)
            }
        }
        const fields = config.fields.map((field) => {
            if(field.methods.indexOf(this.props.method) != -1){
                return (<div><TextField
                        min={field.min}
                        max={field.max}
                        value={data ? data[field.name]: ""}
                        options={field.options}
                        ref={field.name}
                        name={field.name}
                        label={field.label}
                        type={field.type}
                        isRequired={field.isRequired} /></div>)
            }
        })
        return(
            <form onSubmit={this.handleSubmit} noValidate>
                {fields}
                <input className="login-button" type="submit" value="Add" />
            </form>
        )
    }
}

Form.propTypes = {
    method: PropTypes.string
}

Form.defaultProps = {
    method: 'post'
}

export default connect()(Form)
