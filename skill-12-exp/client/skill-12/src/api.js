// src/api.js
import axios from "axios";

// Change backend port if needed
const API = axios.create({
  baseURL: "/api/students",
});

export const getStudents = () => API.get("/");
export const getStudent = (id) => API.get(`/${id}`);
export const createStudent = (data) => API.post("/", data);
export const updateStudent = (id, data) => API.put(`/${id}`, data);
export const deleteStudent = (id) => API.delete(`/${id}`);