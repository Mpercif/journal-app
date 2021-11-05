import {createStore, 
        combineReducers, 
        compose,
        applyMiddleware
    } from 'redux'
    
import thunk from 'redux-thunk';


import { authReducer } from '../Reducers/authReducer'
import { notesReducer } from '../Reducers/notesReducer';
import { uiReducer } from '../Reducers/uiReducer';

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)