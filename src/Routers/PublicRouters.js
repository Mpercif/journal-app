import React from 'react'
import { Redirect, Route } from 'react-router'


export const PublicRouters = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => {

    return (
        <Route  {...rest}
            component={(props) =>( 
                (isLoggedIn)
                ? <Redirect to='/' />
                : <Component {...props} />    
            )}        

        />
    )
}
