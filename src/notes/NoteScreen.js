import React, { useEffect, useRef } from 'react'
import moment from 'moment'


import {useForm} from '../Hooks/useForm';
import { useDispatch, useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { activeNote, startDeleting } from '../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch()

    const {active: note} = useSelector(state => state.notes)
    const [values, handleInputChange, reset] = useForm(note)

    const {url, title, body, date, id} = values
    
    
    const activeId = useRef(note.id)

    const handleClickDelete = () =>{
        dispatch(startDeleting(id))
    }
    
    useEffect(() => {
        
        if(note.id !== activeId.current){
            reset(note)
            activeId.current = note.id
        }
        
    }, [note, activeId, reset])
    
    useEffect(() => {
        dispatch(activeNote(values.id, {...values}) )
    }, [values, dispatch])
    
    const day = moment(date)
          
    return (
        <div className="notes__main-content animate__animated animate__fadeIn">
            <NotesAppBar
                day={day.format( "LL")}
            />
            <div className="notes__content">
                <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                    autoComplete="off"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />

                <textarea 
                    placeholder="What happened today ?"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                />
                {
                    (url)
                    &&
                    <div className="notes__image">
                        <img
                            src={`${url}`}
                            alt="planetas"
                        />
                    </div>
                }

                <button 
                    onClick={handleClickDelete}
                    className="buttons danger"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
