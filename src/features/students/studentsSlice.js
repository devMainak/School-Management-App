import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchStudents = createAsyncThunk("fetch/students", async () => {
  const response = await axios.get("https://06cae953-318f-4749-845b-a59b064b4f4b-00-33u2c47zy1ymn.pike.replit.dev/students")

  return response.data
})

export const addStudentAsync = createAsyncThunk("add/student", async (newStudent) => {
  const response = await axios.post("https://06cae953-318f-4749-845b-a59b064b4f4b-00-33u2c47zy1ymn.pike.replit.dev/students", newStudent)
  
  return response.data
})


export const updateStudentAsync = createAsyncThunk("update/student", async ({studentId, updatedData}) => {
  const response = await axios.put(`https://06cae953-318f-4749-845b-a59b064b4f4b-00-33u2c47zy1ymn.pike.replit.dev/students/${studentId}`, updatedData)

  return response.data
})


export const deleteStudentAsync = createAsyncThunk("delete/student", async (studentId) => {
  const response = await axios.delete(`https://06cae953-318f-4749-845b-a59b064b4f4b-00-33u2c47zy1ymn.pike.replit.dev/students/${studentId}`)

  return response.data
})


export const setFilter = () => {
  
}


export const setSortBy = () => {
  
}


export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    filter: "All",
    sortBy: "name",
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.pending, (state) => {
      state.status = "loading"
    })

    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.status = "success"
      state.students = action.payload
    })

    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.status = "error"
      state.error = action.error.message
    })

    builder.addCase(addStudentAsync.fulfilled, (state, action) => {
      state.students.push(action.payload)
    })

    builder.addCase(updateStudentAsync.fulfilled, (state, action) => {
      const index = state.students.findIndex(student => student._id === action.payload._id)
      state.students[index] = action.payload
    })

    builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
      state.students.filter(student => student._id !== action.payload._id)
    })
  }
})

export default studentsSlice.reducer