// import logo from './logo.svg';
// import SkillSection from './SkillSection';

import {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import NoteList from "./components/NoteList";


function App(){
    const [noteTitle, setNoteTitle] = useState('');
    const [notes, setNotes] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableNote, setEditableNote] = useState(null)
/**
 * notes =[
 *  {id: '1', title: 'Note-1'},
 *  {id: '2', title: 'Note-2'},
 *  {id: '3', title: 'Note-3'},
 * 
 * ]
 */
    // const createHandler = (e) => {
    //     e.preventDefault();
    //     if (!noteTitle){
    //         return alert('Please Provide a Valid Title');
    //     }
    //     const newNote = {
    //         id: Date.now() + '',
    //         title: noteTitle
    //     };

    //     setNotes([...notes, newNote]);
    //     setNoteTitle('')
    // };

    // const removeHandler = (id) => {
    //     const newNotes = notes.filter((item) => item.id !== id) // return 2 !== 2 === false;
    //     setNotes(newNotes)
    // };

    // const editHandler = (id) => {
    //     const toBeEditNote = notes.find((item) => item.id === id) // 1 === 1;
    //     setEditMode(true);
    //     setEditableNote(toBeEditNote);
    //     setNoteTitle(toBeEditNote.title);
    // };

    // const updateHandler = (e) => {
    //     e.preventDefault();
    //     if(!noteTitle){
    //         return alert ('Please Provide a valid title')
    //     }

    //     const newNotes = notes.map((item) => {
    //         if(item.id === editableNote.id){
    //             item.title = noteTitle;
    //         };
    //         return item;
    //     })

    //     setNotes(newNotes);
    //     setEditMode(false);
    //     setEditableNote(null);
    //     setNoteTitle('')
    // }




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






// function App() {
//   const a = 10;
//   const mahirSkills = ["js", "react", "node"];
//   const billalSkills = ["js", "react", "node", "bootstrap"];
//   const naimSkills = ["js", "react", "node", "wp"];
  
//   return (
//     <div className="App">
//       <SkillSection 
//           skills = {mahirSkills}
//           name = "Mahir"
//           demo = {{a:10}}
//       />
//       <hr />
//       <SkillSection 
//         skills = {billalSkills}
//         name = "Billal"
//         demo = {{a:10}}
//       />
//       <hr />
//       <SkillSection 
//         skills = {naimSkills}
//         name = "Naim"
//         demo = {{a:10}}
//       />
//       <hr />
//     </div>
//   );
// };