import React, { Component } from "react"
import { Router, Route } from 'react-router-dom'
import Login from './Login'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import "../styles/App.css"

const store = configureStore()


class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        )
    }
}

export default App
