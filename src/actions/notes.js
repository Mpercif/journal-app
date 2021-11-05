import {addDoc,
        deleteDoc,
        setDoc, 
        collection,
        doc} from "firebase/firestore/lite";

import Swal from 'sweetalert2'

import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from "../helpers/fileUpload";


export const startNewNote = () =>{
    return async (dispatch, getState) =>{

        const uid = getState().auth.uid;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
    
        const ref = await addDoc(collection(db, `${uid}`,'journal/notes'), newNote)            
        dispatch(activeNote(ref.id, newNote))
        dispatch(addNewNote(ref.id, newNote) )
    }   
}

export const activeNote = (id, note) =>({
    type: types.notesActive,
    payload:{
        id,
        ...note
    }
})

export const startLoadingNotes =  (uid) => {
    return async (dispatch) =>{
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const setNotes = (notes) =>({
    type: types.notesLoad,
    payload: notes

})

export const startSaveNote = (note) =>{
    return async (dispatch, getState) =>{

        const {uid} = getState().auth

        note.date = new Date().getTime()

        if(!note.url){
            delete note.url;
        }

        const noteToFireStore = {...note};
        delete noteToFireStore.id;

        await setDoc(doc(db, `${uid}`, `/journal/notes/${note.id}`), noteToFireStore)
        dispatch(refreshNote(note.id, note) )
        Swal.fire({
            title: 'Update ! :D ',
            text: 'La nota se actualizo',
            icon: 'success',
            confirmButtonText: 'Entendido'
          })

    }
}

export const refreshNote = (id, note) =>({
    type: types.notesUpdate,
    payload:{
        id, 
        note
    }
})


export const startUpLoading = (file) =>{
    return async (dispatch, getState) =>{
        const {active: activeNote} = getState().notes;

        Swal.fire({
            title: 'Uploading ...',
            text: 'Pls Wait... :D',
            showConfirmButton:false,
            showLoaderOnConfirm:true,
            onBeforeOpen: ()=>{
                Swal.showLoading()
            }
          });

          const fileUrl = await fileUpload(file)
          activeNote.url = fileUrl
          dispatch(startSaveNote(activeNote))

          Swal.close()
        
    }
}

export const startDeleting = (id) =>{
    return async (dispatch,  getState) =>{
        const {uid} = getState().auth;
        await deleteDoc(doc(db, `${uid}`,`/journal/notes/${id}`) )

        await dispatch(deleteNote(id));
    }
}

export const deleteNote = (id) =>({
    type: types.notesDelete,
    payload: id
})

export const cleaningNotes = () => ({
    type: types.notesLogoutCleaning
})

export const addNewNote = (id,note) =>({
    type: types.notesAddNew,
    payload: {
        id, 
        ...note
    }
})
