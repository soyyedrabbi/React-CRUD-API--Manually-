import React from 'react';
import { StudentContext } from '../Contexts/Student';
import { useContext } from 'react';
import AllStudentList from './AllStudentList';
import PresentStudentList from './PresentStudentList';
import AbsentStudentList from './AbsentStudentList';

const StudentSection = () => {
  const {students, setStudents} = useContext(StudentContext);

  const toggleHandler = (id) => {
    const newStudentList = students.map(item => {
        if (item.id === id) {
            item.isPresent = !item.isPresent
        }
        return item
    })
    setStudents(newStudentList);
  }

  return (
    <div className='student-section'>
      <AllStudentList />
      <PresentStudentList toggleHandler = {toggleHandler} />
      <AbsentStudentList  toggleHandler = {toggleHandler} />
    </div>
  )
}

export default StudentSection