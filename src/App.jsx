import {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import NoteList from "./components/NoteList";


function App(){
    const [noteTitle, setNoteTitle] = useState('');
    const [notes, setNotes] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableNote, setEditableNote] = useState(null)

    return(
        <div className="App">
           <Form 
                noteTitle = {noteTitle}
                setNoteTitle = {setNoteTitle}
                notes = {notes}
                setNotes = {setNotes}
                editableNote = {editableNote}
                setEditableNote = {setEditableNote}
                editMode = {editMode}
                setEditMode = {setEditMode}

           />

           <NoteList 
                setNoteTitle = {setNoteTitle}
                notes = {notes}
                setNotes = {setNotes}
                editableNote = {editableNote}
                setEditableNote = {setEditableNote}
                setEditMode = {setEditMode}
           />

        </div>
    )
}


export default App;