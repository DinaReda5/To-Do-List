//  import { useState } from 'react'
import { FC,useState ,ChangeEvent, useEffect} from 'react'
import './App.css'
import Container from './container'
import './css/style.css'
const App: FC = () => {
  
  interface taskType{
    taskName: string;
  }
  const oldTodo : taskType[] = JSON.parse(localStorage.getItem("Todolist") || '[]') 
  const [text, setText] = useState<string>("");
  const [todo,setTodo]=useState<taskType[]>(oldTodo)
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
  setText(event.target.value)
  }
  const addTask = (): void => {
    const newText ={taskName:text}
    setTodo([...todo, newText]);
  setText("")
  }
  const compleleTask = (taskNameToDelete: string) => {
    setTodo(todo.filter((text) => {
  return text.taskName!=taskNameToDelete
  }))
  }
  
  useEffect(() => localStorage.setItem("Todolist" , JSON.stringify(todo)) , [todo])
  return (
    <div className='bg-[#0D0714] w-screen h-screen min-h-screen p-0 m-0 text-white'>
      <h1>TO DO LIST</h1>
      <div className="header flex justify-center items-center">
        <input type='text'onChange={handleChange} className='bg-transparent placeholder:italic placeholder:rgba(119, 119, 119, 1) border-[#3E1671] border-2 w-80  h-auto p-2 rounded-md  focus:outline-none m-5   min-w-36' placeholder="Add a new task" />
        <button onClick={addTask} className='bg-purple-400 hover:bg-[#9E78CF] text-white text-4xl py-0.5 px-2 rounded-lg '>+
        </button>
      </div>
      <div className="todoList">
        <p className='mr-96 mt-10 mx-auto'>tasks to do</p>
      </div>
      {
        todo.map((task: taskType, key: number) => {
       
          return <Container key={key} task={task} completeTask={compleleTask} /> 
        }
        )
        
      }
      
    
    </div>
  )
}

export default App