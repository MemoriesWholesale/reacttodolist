import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

type Props = {
    LoggedIn: boolean
}

export default function Navigation(props:Props) {
  return (
    <div>
        <Navbar bg='info' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href='/'>To-Do List</Navbar.Brand>
                <Nav className='me-auto'>
                    {props.LoggedIn?<Nav.Link href='/'>Log Out</Nav.Link>:<Nav.Link href='/'>Log In</Nav.Link>}
                </Nav>
            </Container>
         </Navbar>
    </div>
  )
}