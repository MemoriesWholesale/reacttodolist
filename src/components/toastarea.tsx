import { useState } from "react"
import Toast from "react-bootstrap/Toast"
import ToastContainer from 'react-bootstrap/ToastContainer';


type Props = {toasts:string[]}

export default function Toastarea({toasts}: Props) {
    const [openToasts,setOpenToasts] = useState(toasts.map((_)=>true))
  return (
    <ToastContainer position="top-end">
        {toasts.map((t,i)=>
            <Toast key={i} show={openToasts[i]} onClose={()=>setOpenToasts([...openToasts.slice(0,i),false,...openToasts.slice(i+1)])} delay={3000} autohide>
            <Toast.Header>
              <strong className="me-auto">Alert!</strong>
            </Toast.Header>
            <Toast.Body>{t}</Toast.Body>
          </Toast>
        )}
        
        
    </ToastContainer>
  )
}