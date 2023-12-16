import React from 'react'

interface props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void;

}
const InputField = ({todo,setTodo,handleAdd}:props) => {
  return (
    <form className=' pt-6  '
    onSubmit={(e)=>handleAdd(e)}
    >
        <input 
        value={todo}

        onChange={(e)=>setTodo(e.target.value)}
        className='  shadow-2xl text-lg text-black   p-3 bg-white w-[810px] rounded-l-full rounded-r-full ' type="input" placeholder='Enter a Todo' />
        <button className='absolute border hover:bg-green-400 border-white bg-green-600 shadow-xl text-white rounded-full ml-2 p-3' >Go</button>
    </form>
  )
}

export default InputField