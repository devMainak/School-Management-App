import { createSlice } from '@reduxjs/toolkit'

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    status: "idle",
    error: null
  },
  reducers: {}
})

export default studentsSlice.reducer