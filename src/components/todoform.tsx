import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
// import { useState } from "react"
import FloatingLabel from "react-bootstrap/FloatingLabel"
// import type { Task } from './todoitem'

type Props = {
    handleChange: (event:React.ChangeEvent<HTMLInputElement>)=>void
    handleAdd: (event:React.MouseEvent)=>void
}



export default function Todoform({handleChange,handleAdd}: Props) {
    
  return (
    <>
    <Form>
        <FloatingLabel label='New To-Do' className="mt-3 mb-4 mx-5">
            <Form.Control as='textarea' id='newtask' placeholder="New To-Do" style={{width:'500px', height:'50px'}} onChange={handleChange}/>
        </FloatingLabel>
        <Button className="mx-5 bg-info" type='submit' id='addtaskbtn' onClick={(e)=>handleAdd(e)}>
            Add
        </Button>
    </Form>
    </>
  )
}
