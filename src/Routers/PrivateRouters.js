import React from 'react'
import { Redirect, Route } from 'react-router'


export const PrivateRouters = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => {

    return (
        <Route {...rest}
            component={(props) =>( 
                (isLoggedIn)
                ? <Component {...props} />
                : <Redirect to='/auth/login' />
            )}
        />
    )
}
