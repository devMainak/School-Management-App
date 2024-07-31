import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTeachers =  createAsyncThunk("fetch/teachers", async () => {
  const response = await axios.get("https://06cae953-318f-4749-845b-a59b064b4f4b-00-33u2c47zy1ymn.pike.replit.dev/teachers")

  return response.data
})

export const addTeacherAsync = createAsyncThunk("add/teacher", async (teacher) => {
  const response = await axios.post("https://06cae953-318f-4749-845b-a59b064b4f4b-00-33u2c47zy1ymn.pike.replit.dev/teachers", teacher)

  return response.data
})

export const deleteTeacherAsync = createAsyncThunk("delete/teacher", async (teacherId) => {
  const response = await axios.delete(`https://06cae953-318f-4749-845b-a59b064b4f4b-00-33u2c47zy1ymn.pike.replit.dev/teachers/${teacherId}`)

  return response.data
})

export const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachers: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeachers.pending, (state) => {
      state.status = "loading"
    })

    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      state.status = "success"
      state.teachers = action.payload
    })

    builder.addCase(fetchTeachers.rejected, (state, action) => {
      state.status = "error",
      state.error = action.payload.message
    })

    builder.addCase(addTeacherAsync.fulfilled, (state, action) => {
      state.teachers.push(action.payload)
    })

    builder.addCase(deleteTeacherAsync.fulfilled, (state, action) => {
     state.teachers = state.teachers.filter(teacher => teacher._id !== action.payload._id)
    })
  }
})

export default teachersSlice.reducer