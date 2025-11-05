import React from 'react'

function StudentTable({ students, onEdit, onDelete }) {
  if (!students.length) {
    return <p>No students found.</p>
  }

  return (
    <table border="1" cellPadding="8" className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s._id}>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.age}</td>
            <td>{s.course}</td>
            <td>
              <button onClick={() => onEdit(s)}>Edit</button>
              <button onClick={() => onDelete(s._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StudentTable