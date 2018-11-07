import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import '../../styles/common.css'

class TextField extends Component{
    constructor(props){
        super(props)
        this.state = {
            error: null,
            value: ""
        }
        this.validate = this.validate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getValue = this.getValue.bind(this)
    }
    handleChange(e){
        if(this.state.error){
            this.setState({error: null})
        }
        this.setState({value: e.target.value})
    }
    getValue(){
        return this.state.value
    }
    getError(){
        return this.state.error
    }
    validate(){
        const { min, max, isRequired, name} = this.props
        const { value } = this.state
        var error = ""
        if(isRequired && value === ""){
            error = name + " is required"
        } else if(value.length < min){
            error = name + " has to be at least " + min + " characters"
        } else if(value.length > max){
            error = name + " has to be less than " + max + " characters"
        }
        this.setState({ error })
    }
    render(){
       const { name, label, type} = this.props
       const { value, error } = this.state
       return(
            <div>
                <input name={name} placeholder={label} type={type} value={value} onChange={this.handleChange} className="input" /><br />
                {error && <span>{error}</span>}
            </div>
       )
    }
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    setErrors: PropTypes.func.isRequired,
    min: PropTypes.number,
    max: PropTypes.number
}

TextField.defaultProps = {
    type: 'text',
    min: 7,
    max: 20
}

export default TextField
