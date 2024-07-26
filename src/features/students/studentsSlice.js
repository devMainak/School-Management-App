import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchStudents = createAsyncThunk("fetch/students", async () => {
  const response = await axios.get("https://06cae953-318f-4749-845b-a59b064b4f4b-00-33u2c47zy1ymn.pike.replit.dev/students")

  return response.data
})

export const addStudentAsync = createAsyncThunk("add/student", async (newStudent) => {
  const response = await axios.post("https://06cae953-318f-4749-845b-a59b064b4f4b-00-33u2c47zy1ymn.pike.replit.dev/students", newStudent)
  
  console.log(response)
})

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
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
  }
})

export default studentsSlice.reducer