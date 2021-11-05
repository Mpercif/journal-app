import {collection, getDocs } from "@firebase/firestore/lite"
import { db } from "../firebase/firebase-config"


export const loadNotes = async ( uid ) =>{
    const allNotes = await getDocs(collection(db, `${uid}`, 'journal/notes'))
    const notes = []

    allNotes.forEach(notesChild =>{
        notes.push({
            id: notesChild.id,
            ...notesChild.data()
        })
    })  
    
    return notes
}