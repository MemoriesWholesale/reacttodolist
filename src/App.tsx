import { useState } from "react"
import Navigation from "./components/navigation"
import ToDoList from "./components/todolist"
import Todoform from "./components/todoform"
import Button from "react-bootstrap/Button"
import { Task } from "./components/todoitem"
import Toastarea from "./components/toastarea"

type Props = {}


export default function App({}: Props) {

  const [newtask,setNewtask] = useState<Task>({task:''})

  const [tasks,setTasks] = useState<Task[]>([])

  const [toasts,setToasts] = useState<string[]>([])


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void=>{
    setNewtask({task:event.target.value})
  }
  const handleAdd = (event: React.FormEvent):void=>{
    event.preventDefault();
    setTasks([...tasks,newtask])
    setToasts([...toasts,`${newtask.task} has been added to your to-do list!`])
    }
  const handleRemove = (event:React.MouseEvent,task:Task):void=>{
    event.preventDefault();
    setTasks(tasks.filter((t)=>t!=task))
    setToasts([...toasts,`${task.task} has been removed from your to-do list!`])
  }

  
  

  const [LoggedIn,setLogIn] = useState(false)
  return (
    <div>
     <Navigation LoggedIn={LoggedIn}/>
     <Toastarea toasts={toasts}/>
     <Todoform handleChange = {handleChange} handleAdd={handleAdd}/>
     <h3>To Do</h3>
     <ToDoList tasks={tasks} handleRemove={handleRemove}/>
     
    {LoggedIn?<Button onClick={()=>setLogIn(false)}>Log Out</Button>:<Button onClick={()=>setLogIn(true)}>Log In</Button>}
    </div>
  )
}