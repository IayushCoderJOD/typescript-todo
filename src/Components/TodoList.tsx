import React from 'react'
import { Todo } from './Model'
import SingleTodo from './SingleTodo';


interface props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<props> = ({todos,setTodos}:props) => {
  return (
    <div className='flex pt-9 items-center  w-[90%] flex-col' >
        {
            todos.map((todo)=>(
                <SingleTodo todo={todo}
                key={todo.id}
                setTodos={setTodos}
                todos={todos}   />
            ))
        }
    </div>
  )
}

export default TodoList