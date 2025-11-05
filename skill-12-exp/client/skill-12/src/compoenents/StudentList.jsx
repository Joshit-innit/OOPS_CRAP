import React from 'react'
import StudentTable from './StudentTable'

function StudentList({ students, onEdit, onDelete }) {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      <StudentTable students={students} onEdit={onEdit} onDelete={onDelete} />
    </div>
  )
}

export default StudentList