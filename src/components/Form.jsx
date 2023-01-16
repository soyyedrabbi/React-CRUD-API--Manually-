import React from 'react';
import {useContext} from "react";
import {StudentContext} from './../Contexts/Student';

const Form = () => {
  const studentCtx = useContext(StudentContext);

  const createStudentHandler = (e) => {
    e.preventDefault();
    if(!studentCtx.studentName){
        return alert ('Please provide a valid name...');
    }
    const newStudent = {
        id: Date.now() + '',
        name: studentCtx.studentName
    }

    studentCtx.setStudents([...studentCtx.students, newStudent]);
    studentCtx.setStudentName('')
}

  const updateHandler = (e) => {
    e.preventDefault();
    if(!studentCtx.studentName){
        return alert ('Please provide a valid name...');
    }
    
    const newStudentList = studentCtx.students.map((item) => {
        if (item.id === studentCtx.editableStudent.id){
            item.name = studentCtx.studentName;
        };
        return item;
    })

    studentCtx.setStudents(newStudentList);

    studentCtx.setStudentName('');
    studentCtx.setEditMode(false);
    studentCtx.setEditableStudent(null);
  }

  return (
    <form onSubmit={(e) => {
          studentCtx.editMode ? updateHandler(e) : createStudentHandler(e)
        }} className='student-form'>
            <input type="text" value={studentCtx.studentName} onChange={(e) => studentCtx.setStudentName(e.target.value)} />

            <button onClick={(e) => {
          studentCtx.editMode ? updateHandler(e) : createStudentHandler(e)
        }} type="submit">{studentCtx.editMode ? 'Update Note' : 'Add Note'}</button>
    </form>
  )
}

export default Form