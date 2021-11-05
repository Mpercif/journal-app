import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUpLoading } from '../actions/notes'

export const NotesAppBar = ({day}) => {

    const {active} = useSelector(state => state.notes)
    const dispatch = useDispatch()

    const handleSaveNote = () =>{
        dispatch(startSaveNote(active))
    }

    const handleClickPicture = () =>{
        document.querySelector('#file').click();
    }
    
    const handelClickFile = (e) =>{
        const file = e.target.files[0]
        dispatch(startUpLoading(file) )
    }



    return (
        <div className="notes__appbar">
            <span>{day}</span>
            <input 
                id="file"
                type="file"
                style={{display:"none"}}
                onChange={handelClickFile}
                
                />
            <div>
                <button 
                    className="buttons mr-5"
                    onClick={handleClickPicture}
                >
                    Picture
                </button>
                <button 
                    className="buttons"
                    onClick={handleSaveNote}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
