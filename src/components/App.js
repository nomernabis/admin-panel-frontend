import React, { Component } from "react"
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import configureStore from '../configureStore'

import Login from './Login'
import Home from './Home'
import ProtectedRoute from './common/ProtectedRoute'

import "../styles/App.css"

const store = configureStore()

class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <ProtectedRoute path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App
