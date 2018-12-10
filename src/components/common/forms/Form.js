import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '../TextField'
import { connect } from 'react-redux'
import { showModal, clearPutStatus } from '../../../actions'
import { saveUser, getUser } from '../../../utils'

class Form extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            changed: false,
            fields: {}
        }
        this.fieldChanged = this.fieldChanged.bind(this)
    }
    fieldChanged(name, value){
        var fields = this.state.fields
        fields[name] = value
        this.setState({ fields })
        for(var name in this.state.fields){
            if(this.state.fields[name]){
                this.setState({changed: true})
                return
            }
        }
        this.setState({changed: false})
    }
    handleSubmit(e){
        e.preventDefault()
        const self = this
        var isValid = true
        var data = {}
        this.props.config.fields.forEach(function(f){
            if(f.methods.indexOf(self.props.method) != -1){
                if(self.props.method === 'put'){
                    if(self.refs[f.name].isChanged()){
                        isValid = self.refs[f.name].validate() && isValid
                        if(isValid){
                            data[f.name] = self.refs[f.name].getValue()
                        }
                    }
                } else {
                    isValid = self.refs[f.name].validate() && isValid
                    if(isValid){
                        data[f.name] = self.refs[f.name].getValue()
                    }
                }
            }
        })
        if(Object.keys(data).length != 0){
            if(isValid){
                if(this.props.method==='put'){
                    this.props.dispatch(this.props.actions.put.action(this.props.match.params.id, data))
                } else {
                    this.props.dispatch(this.props.actions.post.action(data))
                }
            } else {
                console.log('form is not valid', data)
            }
        } else {
            console.log('nothing changed')
        }
    }
    render(){
        const { config } = this.props
        const { dispatch, status, response } = this.props
        if(status == 1){
            dispatch(showModal('info', 'Data changed successfully!', null))
            saveUser(response)
            dispatch(clearPutStatus())
            this.setState({changed: false, fields: {}})
        }
        //ref, name, label, type
        var data = null
        if(this.props.method==='put'){
            const user = getUser(this.props.match.params.id)
            if(user){
                data = JSON.parse(user)
            }
        }
        const fields = config.fields.map((field) => {
            if(field.methods.indexOf(this.props.method) != -1){
                return (<div><TextField
                        fieldChanged = {this.fieldChanged}
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
                <input className="login-button" type="submit" value="Add" disabled={!this.state.changed && this.props.method === 'put'} />
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

const mapStateToProps = (state, props) =>{
    return {
        status: state[props.name][props.method].status,
        response: state[props.name][props.method].response
    }
}

export default connect(mapStateToProps, null)(Form)
