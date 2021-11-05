import { getAuth } from '@firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";

  
import { login } from '../actions/auth';
import { JournalScreen } from '../Journal/JournalScreen'
import { AuthRouter } from './AuthRouter';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

        const auth = getAuth()
        auth.onAuthStateChanged((user) =>{

            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadingNotes(user.uid));
            }else{
                setIsLoggedIn(false)
            }

            setChecking(false);
        })

    }, [dispatch, setChecking, setIsLoggedIn]);

    if(checking){
        return(
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouters 
                        isLoggedIn={isLoggedIn}
                        path="/auth" 
                        component={AuthRouter} 
                    />   
                    <PrivateRouters 
                        isLoggedIn={isLoggedIn}
                        path="/" 
                        component={JournalScreen} 
                    />           
                </Switch>
            </div>
        </Router>
    )
}
