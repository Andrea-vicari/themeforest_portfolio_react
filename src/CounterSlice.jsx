import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: "ligth",
  },
  reducers: {
    dark: (state) => {
      state.value = "dark"
    },
    ligth: (state) => {
      state.value = "ligth"
    }
  },
})

// Action creators are generated for each case reducer function
export const { dark, ligth } = counterSlice.actions

export default counterSlice.reducer