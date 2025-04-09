import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type TaskType } from './TaskType'

export interface CounterState {
  tasks:TaskType[]
 
}

const initialState: CounterState = {
  tasks:[],

}

export const counterSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state,action:PayloadAction<TaskType>) => {
        state.tasks.push(action.payload)
    },
    removeTask:(state,action:PayloadAction<number>)=>{
      if(action.payload >= 0 && action.payload < state.tasks.length){
        state.tasks.splice(action.payload,1)
      }
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {addTask,removeTask} = counterSlice.actions

export default counterSlice.reducer