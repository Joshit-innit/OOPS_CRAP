import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StudentForm from './compoenents/StudentForm'
import StudentList from './compoenents/StudentList'

const API_URL = '/api/students'

function App() {
  const [students, setStudents] = useState([])
  const [editingStudent, setEditingStudent] = useState(null)

  const fetchStudents = async () => {
    const res = await axios.get(API_URL)
    setStudents(res.data)
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  const handleAdd = async (student) => {
    await axios.post(API_URL, student)
    fetchStudents()
  }

  const handleUpdate = async (student) => {
    await axios.put(`${API_URL}/${student._id}`, student)
    setEditingStudent(null)
    fetchStudents()
  }

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`)
    fetchStudents()
  }

  return (
    <div className="container">
      <h1> MERN CRUD - Student Management</h1>
      <StudentForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingStudent={editingStudent}
      />
      <StudentList
        students={students}
        onEdit={setEditingStudent}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App