import React, { useState } from 'react'
import "./App.css"
import InputField from './Components/InputField'
import TodoList from './Components/TodoList'
import { Todo } from './Components/Model'

const App:React.FC = () => {

  const [todo,setTodo]=useState<string>("")

  const [todos,setTodos]=useState<Todo[]>([]);

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo)
    setTodos([...todos,{id:Date.now(),todo,isDone:false}])

    setTodo("")

  }
  return (
    <div className='flex flex-col items-center p-5 w-[100%] '>
      <span className=' text-4xl font-serif text-white' >Taskify</span>
      <InputField todo={todo} setTodo={setTodo}  handleAdd={handleAdd}  />
      <TodoList todos={todos} setTodos={setTodos}   />
    
    </div>
  )
}

export default App