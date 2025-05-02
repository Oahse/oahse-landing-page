import React from 'react'
import './litera-bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap'
import LandingPage from './pages/LandingPage.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {


  return (
    <div className="App">
        <Container>
            <Row>
                <Col className='app-wrapper'>
                    <LandingPage />
                </Col>
            </Row>
           
        </Container>
    </div>
  )
}

export default App
