import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormState } from '../models/todo-item'



const initialState: FormState = {
  inputValue: ''
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload
    },
    clearInputValue: (state) => {
      state.inputValue = ''
    }
  }
})

export const { setInputValue, clearInputValue } = formSlice.actions
export default formSlice.reducer