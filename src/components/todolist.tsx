import type { Task } from './todoitem'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

type Props = {
  tasks:Task[]
  handleRemove: (event:React.MouseEvent,task:Task)=>void
}

export default function ToDoList({tasks,handleRemove}: Props) {
  return (
    <div>  
    <Accordion>
    {tasks.map((t,i)=><Accordion.Item key={i} eventKey={i.toString()}>
      <Accordion.Header>{t.task}</Accordion.Header>
      <Accordion.Body>
        <Button onClick={(e)=>handleRemove(e,t)}>Remove</Button>
      </Accordion.Body>
      </Accordion.Item>)}
    </Accordion>
    </div>
  )
}