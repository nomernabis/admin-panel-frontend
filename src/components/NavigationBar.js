import React, { Component } from 'react'
import NavigationItem from './NavigationItem'

class NavigationBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            items: [
                {id: 0, name: 'Users', route: '/', isActive: false},
                {id: 1, name: 'Companies', route: '/companies', isActive: false},
                {id: 2, name: 'Restaurants', route: '/restaurants', isActive: false}
            ]
        }
        this.handleItemClicked = this.handleItemClicked.bind(this)
    }
    handleItemClicked(id){
        var { items } = this.state
        var newItems = items.map(item => {
            if(item.id == id){
                item.isActive = true
            } else {
                item.isActive = false
            }
            return item
        })
        console.log('item clicked', items)
        this.setState({ items: newItems })
    }
    render(){
        const items = this.state.items.map(item => {
            return (
                <NavigationItem item={item} itemClicked={this.handleItemClicked} />
            )
        })
        return (
            <div className="sideNav">
                {items}
            </div>  
        )
    }
}

export default NavigationBar