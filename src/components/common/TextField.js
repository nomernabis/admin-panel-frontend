import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { isEmailValid, isEmpty, formate, maskPhone } from '../../utils'

import '../../styles/common.css'

class TextField extends Component{
    constructor(props){
        super(props)
        var { value } = this.props
        if(this.props.type === "phone" && value !== ""){
            value = maskPhone(value)
        }
        this.state = {
            error: null,
            value: value
        }
        console.log('constructor', this.props)
        this.validate = this.validate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getValue = this.getValue.bind(this)
        this.getError = this.getError.bind(this)
    }
    handleChange(e){
        if(this.state.error){
            this.setState({error: null})
        }
        if(this.props.error){
            this.props.clearError()
        }
        if(this.props.type === "phone"){
            const value = e.target.value
            var formated = formate(value)
            var L = formated.length
            console.log('L', formated)
            if(!isEmpty(value) && isNaN(value[value.length - 1])){return}
            if(L > 10){
                return
            }
            if(L == 4){
                const masked = "(" + formated.substr(0, 3) + ") " + formated.substr(3)
                this.setState({value: masked})
                return
            }
            if(L == 7){
                const masked = "(" + formated.substr(0, 3) + ") " + formated.substr(3, 3) + " " + formated[formated.length-1]
                this.setState({value: masked})
                return
            }
            if(L == 3){
                this.setState({value: formated})
                return
            }
            if(L == 6){
                const masked = value.substr(0, 9)
                this.setState({value: masked})
                return
            }
        }
        this.setState({value: e.target.value})
    }
    getValue(){
        if(this.props.type === "phone"){
            return formate(this.state.value)
        }
        if(this.props.type === "select" && isEmpty(this.state.value)){
            return this.props.options[0].value
        }
        return this.state.value
    }
    getError(){
        return this.state.error
    }

    validate(){
        const { min, max, isRequired, name, type } = this.props
        const { value } = this.state
        var error = null
        console.log('value', value)
        if(isRequired && (value === "" || value == undefined)){
            error = name + " is required"
        } else if(value.length < min && !isEmpty(value)){
            error = name + " has to be at least " + min + " characters"
        } else if(value.length > max){
            error = name + " has to be less than " + max + " characters"
        } else if(type == 'email'){
            if(!isEmpty(value)){
                const valid = isEmailValid(value)
                if(!isEmailValid(value)){
                    error = "Email is not valid"
                }
            }
        } else if(type === 'phone'){
            const formated = formate(value)
            if(!isEmpty(formated) && formated.length < 10){
                error = "Phone is not valid"
            }
        }
        if(type === 'select'){
            console.log('xxx', error)
        }
        this.setState({ error })
        return error == null
    }
    render(){
       const { name, label, type} = this.props
       const { value, error } = this.state
       console.log('val', value)
       if(type === 'select'){
           const options = this.props.options.map(o => <option value={o.value}>{o.name}</option>)
           return (
               <div>
                    <select value={value} name={name} onChange={this.handleChange}>
                        {options}
                    </select>
               </div>
           )
       }
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
    type: PropTypes.string.isRequired,
    error: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number
}

TextField.defaultProps = {
    type: 'text',
    max: 20
}

export default TextField
