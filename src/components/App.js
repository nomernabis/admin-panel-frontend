import React, { Component } from "react"
import Login from './Login'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import "../styles/App.css"

const store = configureStore()


class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <Login />
            </Provider>
        )
    }
}

export default App
