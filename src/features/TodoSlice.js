import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 todoList: [],
};

const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    savetodo:(state,action)=>{
        state.todoList.push(action.payload)
    },
    setCheck:(state,action)=>{
        state.todoList.map(item=>{
            if(action.payload===item.id){
                if(item.done===true){
                    item.done=false
                }else {
                    item.done=true
                }
            }
        })
    }
    }
});

export const {savetodo,setCheck} = TodoSlice.actions
export const selectTodoList= state => state.todos.todoList
export default TodoSlice.reducer