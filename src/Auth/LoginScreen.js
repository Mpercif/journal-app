import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../actions/auth'
import { useForm } from '../Hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const {loading} = useSelector(state => state.ui)

   
    const [formValues, handleInputChange] = useForm({
         email: 'mpercig@gmail.com',
         password: '123456'
     })

    const {email, password} = formValues

     const handleLogin = (e)=>{
        e.preventDefault()
        dispatch(startLoginEmailPassword(email, password) )
     }

     const handleGoogleLogIn = ()=>{
        dispatch(startGoogleLogin())
     }


    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    name="email"
                    placeholder="email"
                    autoComplete="off"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    className="buttons pointer buttons__btn-primary"
                    type="submit"
                    disabled={loading}
                >
                    Ingresar
                </button>

                <div 
                    className="google-btn" 
                    onClick={handleGoogleLogIn}
                
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>

                <Link 
                    className="link"
                    to="/auth/register"
                >
                    Create new account
                </Link>
                
                

            </form>

        </>
    )
}
