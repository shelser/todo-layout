import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import formReducer from './feature/form'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

// Временный store для получения типа
const tempStore = configureStore({
  reducer: {
    todoList: todoReducer,
    form: formReducer
  }
})

export type RootState = ReturnType<typeof tempStore.getState>

export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    form: formReducer
  },
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => {
  saveToLocalStorage(store.getState())
})

export type AppDispatch = typeof store.dispatch

