import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/auth'
import { startNewNote } from '../actions/notes'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch()
    const {name} = useSelector(state => state.auth)

    const handleLogOut = ()=>{
        dispatch(startLogout())
    }

    const handleAddEntry = ()=>{
        dispatch(startNewNote())
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon mr-1"></i>
                    <span>
                        {name}
                    </span>
                </h3>
                
                <button 
                    className="buttons mt-5"
                    onClick={handleLogOut}
                >
                    Logout
                </button>
            </div>
            <div className="journal__new-entry pointer"
                onClick={handleAddEntry}
            >
                <i className="far fa-calendar-plus mt-5"></i>
                <p className="mt-5">
                    New Entry
                </p>
            </div>
            <JournalEntries />
        </aside>
    )
}