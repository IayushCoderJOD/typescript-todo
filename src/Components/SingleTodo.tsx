import React from 'react'
import { Todo } from './Model';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'



type props={
    todo:Todo;
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({todo,todos,setTodos}:props) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()} >
        <span className='bg-yellow-300 text-blue-900 font-semibold rounded-xl shadow-2xl text-2xl p-3' >{todo.todo}</span>
        <button  className='bg-red-600 text-sm text-white m-1 hover:bg-red-700 p-3 rounded-full' >delete</button>
    </form>
  )
}

export default SingleTodo