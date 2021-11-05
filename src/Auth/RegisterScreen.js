import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../Hooks/useForm'
import validator from 'validator'
import { removeError, setError } from '../actions/ui'
import { useDispatch, useSelector } from 'react-redux'
import { startRegisterWithEmailPassword } from '../actions/auth'

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    
    const state = useSelector(state => state.ui);
    const {msgError} = state;

  
    const [valueForm, handleInputChange] = useForm({
        name: 'Miguel Angel', 
        email: 'mpercig@gmail.com', 
        password: '123456', 
        confirm: '123456'
    });

    const {name, email, password, confirm} = valueForm;

    const handleInput = (e)=>{
        e.preventDefault()

        if (isFormValid()){
            dispatch(startRegisterWithEmailPassword(email,password,name))
        }

    };
  

    const isFormValid = ()=>{
        if(name.trim().length === 0){
            dispatch(setError('El nombre es requerido'))
            return false
        }else if(!validator.isEmail(email)){
            dispatch(setError('Email no valido'))
            return false
        }else if(password !== confirm && password.length < 5){
            dispatch(setError('Las contraseñas no coinciden'))
            return false
        }
        dispatch(removeError())
        return true
    }

    return (
<>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleInput}>
                {
                    (msgError) 
                    && 
                    <div className="auth__errors">
                        {`${msgError}`}
                    </div>
                }

                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    className="auth__input"
                    value={name}
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input 
                    type="password"
                    name="confirm"
                    placeholder="Confirm Pass"
                    className="auth__input"
                    value={confirm}
                    onChange={handleInputChange}
                />

                <button
                    className="buttons buttons__btn-primary"
                    type="submit"
                >
                    Register...
                </button>
                
                <Link
                    className="link"
                    to="/auth/login"
                >
                    Already registered?
                </Link>
            </form>

        </>
    )
}
