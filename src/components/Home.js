import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import User from './User'

class Home extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(fetchUsers())
    }
    render(){
        if(this.props.isFetching){
            return (
                <div>Loading...</div>
            )
        }
        const users = this.props.users.map(user => <User {...user} />)
        return(
            <div className="flex flex-center-horizontal">
                <div className="table">
                    <div className="table-header">
                        <div>
                            Username
                        </div>
                        <div>
                            Firstname
                        </div>
                        <div>
                            Lastname
                        </div>
                        <div>
                            Email
                        </div>
                        <div>
                            Phone Number
                        </div>
                        <div>
                            User Type
                        </div>
                        <div>
                            Actions
                        </div>
                    </div>
                    {users}
                    <div className="table-button">
                        <button>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.user.items,
    isFetching: state.user.isFetching
})

export default connect(mapStateToProps, null)(Home)
