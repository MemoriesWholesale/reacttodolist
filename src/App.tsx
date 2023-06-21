import { useState } from "react"
import Navigation from "./components/navigation"
import ToDoList from "./components/todolist"
import Todoform from "./components/todoform"
import Button from "react-bootstrap/Button"
import { Task } from "./components/todoitem"

type Props = {}


export default function App({}: Props) {

  const [newtask,setNewtask] = useState<Task>({task:''})

  const [tasks,setTasks] = useState<Task[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void=>{
    setNewtask({task:event.target.value})
  }
  const handleAdd = (event: React.FormEvent):void=>{
    event.preventDefault();
    setTasks([...tasks,newtask])
    }

  const [LoggedIn,setLogIn] = useState(false)
  return (
    <div>
     <Navigation LoggedIn={LoggedIn}/>
     <Todoform handleChange = {handleChange} handleAdd={handleAdd}/>
     <h1>To Do</h1>
     <ToDoList tasks={tasks}/>
     
    {LoggedIn?<Button onClick={()=>setLogIn(false)}>Log Out</Button>:<Button onClick={()=>setLogIn(true)}>Log In</Button>}
    </div>
  )
}