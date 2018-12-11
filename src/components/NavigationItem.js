import React, { Component } from 'react'

class NavigationItem extends Component{
    constructor(props){
        super(props)
        this.handleItemClicked = this.handleItemClicked.bind(this)
    }
    handleItemClicked(event){
        this.props.itemClicked(this.props.item.id)
    }
    render(){
        const { item } = this.props
        var classes = "nav-item material-text flex flex-center "
        if(item.isActive){
            classes += "active-item"
        }
        return (
            <div className={classes} onClick={this.handleItemClicked}>
                <div>
                    {item.name}
                </div>
            </div>
        )
    }
}

export default NavigationItem