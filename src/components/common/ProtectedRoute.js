import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest } render={(props) => (
        localStorage.getItem('token') != null
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
)

export default ProtectedRoute
