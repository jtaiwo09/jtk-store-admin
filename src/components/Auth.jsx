import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const Auth = ({component: Component, admin, ...rest}) => (
    <Route 
        {...rest}
        render={props => admin ? <Component {...props}/> : <Redirect to='/login' /> }
    />
)

export default Auth
