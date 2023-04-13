import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

function SectionFive() {
  return (
    <section className="contact" id="contact">
    <div style={{
          color: "white",
          background: "black",
          minHeight: "100vh"
          ,display:"flex",
          alignItems:"center"
        }}>
            <Container style={{textAlign:"-webkit-center"}}>
                <div >
                <h1
              style={{
                fontWeight: "bolder",
                color: "#2fa56e",
                textAlign: "center",
                marginBottom: "35px",
              }}
            >
              Contact <span style={{ color: "#ffffff" }}>Me!</span>
            </h1>
                </div>

                <div className="section-five-form">
                    <Form >
                        <Card style={{background:"black",textAlign:"center"}}>
                            <Container>

                        <Row style={{justifyContent:"space-between"}}>
                           <Col md="6" className='section-five-main'>
                            <input placeholder='Full Name' className='section-five-input'></input>
                            </Col> 
                           <Col md="6" className='section-five-main'>
                            <input placeholder='Email Address' className='section-five-input'></input>
                            </Col> 
                        </Row>
                        <Row style={{justifyContent:"space-between"}}>
                           <Col md="6" className='section-five-main'>
                            <input placeholder='Mobile Number' className='section-five-input'></input>
                            </Col> 
                           <Col md="6" className='section-five-main'>
                            <input placeholder='Email Subject' className='section-five-input'></input>
                            </Col> 
                        </Row>
                        <Row style={{justifyContent:"space-between"}}>
                            <Col>
                                <input placeholder='Your Message' className='section-five-inputt'></input>
                            </Col>
                        </Row>
                        <div>
                <Button className='section-btn'>Send Message</Button>
            </div> 
                        </Container>
                        </Card>
                    </Form>
                </div>
            </Container>
        </div>
    </section>
  )
}

export default SectionFive