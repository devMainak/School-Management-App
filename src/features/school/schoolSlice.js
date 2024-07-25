import { createSlice } from '@reduxjs/toolkit'

export const schoolSlice = createSlice({
  name: "school",
  initialState: {
    school: {},
    status: "idle",
    error: null
  },
  reducers: {}
})

export default schoolSlice.reducer