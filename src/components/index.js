import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {savetodo} from '../features/TodoSlice';
const Input = () => {
    const [input, setInput] = useState('');
    const dispatch= useDispatch;
    const handleClickInput = ()=>{
        dispatch(savetodo({
            item: input,
            done:false,
            id : Date.now(),
        }))
    };
    return (
        <div className="input">
            <input type="text" 
            value={input}
            onChange={e=>setInput(e.target.value)}
            >
            </input>
            <button onChange={handleClickInput}>ADD</button>
            
        </div>
    )
}

export default Input
