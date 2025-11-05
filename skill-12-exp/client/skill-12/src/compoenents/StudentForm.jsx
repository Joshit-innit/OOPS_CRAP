import React, { useEffect, useState } from 'react'

function StudentForm({ onAdd, onUpdate, editingStudent }) {
  const [form, setForm] = useState({ name: '', email: '', age: '', course: '' })

  useEffect(() => {
    if (editingStudent) {
      setForm({
        name: editingStudent.name || '',
        email: editingStudent.email || '',
        age: editingStudent.age ?? '',
        course: editingStudent.course || ''
      })
    } else {
      setForm({ name: '', email: '', age: '', course: '' })
    }
  }, [editingStudent])

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      age: form.age === '' ? undefined : Number(form.age),
      course: form.course.trim()
    }
    if (editingStudent?._id) {
      await onUpdate({ ...editingStudent, ...payload })
    } else {
      await onAdd(payload)
    }
    setForm({ name: '', email: '', age: '', course: '' })
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8, marginBottom: 16 }}>
      <input name="name" placeholder="Name" value={form.name} onChange={onChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={onChange} required />
      <input name="age" placeholder="Age" type="number" value={form.age} onChange={onChange} />
      <input name="course" placeholder="Course" value={form.course} onChange={onChange} />
      <button type="submit">{editingStudent ? 'Update' : 'Add'} Student</button>
    </form>
  )
}

export default StudentForm

import React, { useEffect, useState } from 'react'

function StudentForm({ onAdd, onUpdate, editingStudent }) {
  const [form, setForm] = useState({ name: '', email: '', age: '', course: '' })

  useEffect(() => {
    if (editingStudent) setForm(editingStudent)
  }, [editingStudent])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingStudent) onUpdate(form)
    else onAdd(form)
    setForm({ name: '', email: '', age: '', course: '' })
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <input
        name="course"
        placeholder="Course"
        value={form.course}
        onChange={handleChange}
      />
      <button type="submit">
        {editingStudent ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  )
}

export default StudentForm