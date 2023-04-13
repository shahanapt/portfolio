import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function NavbarComponent() {
  return (
    <div>
        {/* <div collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
    <Container style={{background:"black"}}>
      {/* <div>
      <div className='d-flex'style={{color:"white",justifyContent:"space-evenly",height:"75px",alignItems:"center",gap:"50px"
      
          }}>
      <div><h4>Portfolio</h4></div>
      <div className='d-flex' style={{gap:"60px"}}>
      <div href="#home">Home</div>
      <div href="#about">About</div>
      <div href="#services">Services</div>
      <div href="#portfolio">Portfolio</div>
      <div href="#contact">Contact</div>
      </div>
      </div>
      </div> */}
      <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  {/* </div> */}
  </div>
  )
}

export default NavbarComponent