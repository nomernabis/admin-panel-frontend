import React, { Component } from "react"
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import configureStore from '../configureStore'

import Login from './Login'
import Home from './Home'
import ProtectedRoute from './common/ProtectedRoute'
import UserFormPage from './UserFormPage'
import Modal from './Modal'

import "../styles/App.css"

const store = configureStore()

class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <div>
                    <div className="navbar">
                    </div>
                    <div className="content">
                        <div className="sideNav">
                            
                        </div>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/login" component={Login} />
                                <ProtectedRoute path="/users/add" component={(props) => <UserFormPage {...props} method='post' />} />
                                <ProtectedRoute path="/users/edit/:id" component={(props) => <UserFormPage {...props} method='put' />} />
                                <ProtectedRoute path="/" component={Home} />
                            </Switch>
                        </BrowserRouter>
                    </div>
                    <Modal />
                </div>
            </Provider>
        )
    }
}

export default App
