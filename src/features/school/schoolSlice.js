import { createSlice } from '@reduxjs/toolkit'

export const schoolSlice = createSlice({
  name: "school",
  initialState: {
    totalStudents: 0,
    totalTeachers: 0,
    averageAttendance: 0,
    averageMarks: 0
  },
  reducers: {
    updateSchoolStats: (state, action) => {
      state.totalStudents = action.payload.totalStudents
      state.totalTeachers = action.payload.totalTeachers
      state.averageAttendance = action.payload.averageAttendance
      state.averageMarks = action.payload.averageMarks
    },
    setTopStudent: (state, action) => {
      state.topStudent = action.payload
    }
  }
})

export const { updateSchoolStats, setTopStudent } = schoolSlice.actions

export default schoolSlice.reducer