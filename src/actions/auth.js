import Swal from 'sweetalert2'

import {types} from '../types/types'
import {getAuth, 
        signInWithPopup, 
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        updateProfile
    } from 'firebase/auth'
import { authGoogle } from '../firebase/firebase-config';
import { finishLoading, startLoading } from './ui';
import { cleaningNotes, startLoadingNotes } from './notes';


export const startLoginEmailPassword = (email, password)=>{
    return (dispatch)=>{

        dispatch(startLoading());

        const auth = getAuth();
        
        signInWithEmailAndPassword(auth, email, password)
            .then( ({user}) =>{
                dispatch(finishLoading());
                dispatch(login(user.uid, user.displayName))
            } )
            .catch( e=>{
                dispatch(finishLoading());
                console.log(e);
                Swal.fire({
                    title: 'Error !',
                    text: 'Correo o contraseña erroneo',
                    icon: 'error',
                    confirmButtonText: 'Entendido'
                  })
            })
    }
}

export const startRegisterWithEmailPassword = (email, password, name) =>{
    return (dispatch) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async({user})=>{
                const userAct = auth.currentUser;
                await updateProfile(userAct, {displayName: name})
                await dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch( () =>{
                Swal.fire({
                    title: 'Error !',
                    text: 'Correo o contraseña erroneo',
                    icon: 'error',
                    confirmButtonText: 'Entendido'
                  })
            })
    }
}

export const startGoogleLogin= ()=>{
    return (dispatch)=>{
        const auth = getAuth()
        signInWithPopup(auth, authGoogle)
            .then(({user}) =>{
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}


export const login = (uid, displayName)=>{
    return{
        type: types.login,
        payload: {
            uid, 
            displayName
        }
    }
}

export const startLogout = ()=>{
    return async(dispatch) =>{
        const auth = getAuth()
        await auth.signOut()

        dispatch(logout())
        dispatch(cleaningNotes())
    }
}

export const logout = ()=>{
    return{
        type: types.logout
    }
}