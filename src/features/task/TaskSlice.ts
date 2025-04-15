import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type TaskType } from './TaskType'

export interface CounterState {
  tasks:TaskType[],
  isOpen:boolean,
}

const initialState: CounterState = {
  tasks:[],
  isOpen:false
}

export const counterSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state,action:PayloadAction<TaskType>) => {
        state.tasks.push(action.payload)
    },
    removeTask:(state,action:PayloadAction<string>)=>{
      state.tasks = state.tasks.filter((task:TaskType)=>task.id !== action.payload)
    },
    openTaskForm:(state)=>{
      state.isOpen = true
    },
    closeTaskForm:(state)=>{
      state.isOpen = false
    },
    toggleFinishStatus:(state,action:PayloadAction<string>)=>{
      state.tasks = state.tasks.map(((task:TaskType)=>task.id === action.payload ? {...task,isFinish:!task.isFinish} : task))
    }
  },
})

// Action creators are generated for each case reducer function
export const {addTask,removeTask,closeTaskForm,openTaskForm,toggleFinishStatus} = counterSlice.actions

export default counterSlice.reducer