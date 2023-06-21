import Todoitem from './todoitem'
import type { Task } from './todoitem'

type Props = {
  tasks:Task[]
  
}

export default function ToDoList({tasks}: Props) {
  return (
    <div>  
    <ul>
        {tasks.map((t,i)=><li key={i}>{t.task}</li>)}
    </ul>
    </div>
  )
}