import React from 'react';
import 'animate.css';
import './Linkly.css';
import { Container, Row, Col, Button, Form, Spinner, Alert, Navbar, Nav } from 'react-bootstrap';
import SignIn from './Images/sign-in.png';
import Link from './Images/link.png';
import Arrow from './Images/arrow-right.png';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Linkly() {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [custom, setCustom] = useState('');
    const [loading, setLoading] = useState(false);
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [show, setShow] = useState(true);
    const url = 'https://slicr.onrender.com/api/v1/links/shorten';

    const handleUrlSubmit = (e) => {
        e.preventDefault();
        console.log('shortneing');
        setLoading(true);
        setLongUrl('');
        setCustom('');
        setShortUrl('');
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(custom ? {"long":longUrl, "custom" : custom} : {"long":longUrl})
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response data
            setShortUrl(data.data.shortUrl);
            setGeneratedUrl(data.data.generatedUrl)
            setShow(true);
            setLoading(false);
          })
          .catch(error => {
            // Handle any errors
            console.error('Error:', error);
            setLoading(false);
          });
       
      };


  return (
    <div className='linkly'>
        <Container fluid >
            <Row className='align-items-center first-row justify-content-between px-4'>
                <Col xs = 'auto mt-2 mt-md-1'>
                    <h1 className='navbar-brand'>Slicr</h1>
                </Col>
                <Col xs = 'auto'>
                    <Row>
                    <Col xs = 'auto'>
                    <div className='login'>
                        Login <img src={SignIn} alt="" />
                    </div>
                    </Col>
                    <Col xs = 'auto' className='d-none d-lg-block'>
                    <div className='register'>
                        Register Now
                    </div>
                    </Col>
                    </Row>
                </Col>
            </Row>
            {/* <Navbar expand="lg" className="px-4">
      <Navbar.Brand className="navbar-brand">Slicr</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse" className="navbar-icon">
        <FaBars />
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="ms-auto" style={{gap:'100px'}}>
          <Nav.Link href="#" className='register col-auto'>Product</Nav.Link>
          <Nav.Link href="#" className='register col-auto'>Pricing</Nav.Link>
          <Nav.Link href="#" className="login col-auto">
            Login <img src={SignIn} alt="" />
          </Nav.Link>
          <Nav.Link href="#" className="d-none d-lg-block register col-auto">
            Register Now
          </Nav.Link>
         </Nav>
      </Navbar.Collapse>
            </Navbar> */}
            <Row className='justify-content-center second-row'>
                <Col lg = 'auto'>
                    <div className='shorten'><h1>Shorten Your Loooong Links :)</h1></div>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5 mt-lg-1'>
                <Col sm ='7' md = '5'>
                    <div className='about'>
                        <p>At the very least, Slicr is an efficient and easy-to-use URL shortening service that streamlines your online experience. Try now!</p>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center mt-4'>
                <Col xs = "auto" md = 'auto'>
                    <div style={{position:'relative'}}>
                        <img src={Link} alt="" className='input-link'/>
                      <Form >
                      <input className='input-url' type="text" placeholder='Enter the link here' required value={longUrl} onChange={(e)=>{setLongUrl(e.target.value)}} />
                      
                      </Form>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center mt-3'>
                <Col xs = 'auto'>
                    <div style={{position:'relative'}}>
                        <img src={Link} alt="" className='input-link'/>
                       <Form onSubmit={handleUrlSubmit}>
                            <input className='input-url' type="text" placeholder='Enter a back-half (optional)' value={custom} onChange={(e)=>{setCustom(e.target.value)}}/>
                            { 
                            loading ?
                            <Spinner animation="border" role="status" className='input-spinner'><span className="visually-hidden">Loading...</span></Spinner>
                            :
                            <Button type='submit' className='input-btn'>
                                <span className='d-none d-md-block'>Shorten Now</span> 
                                <img className='input-btn-arrow d-md-none' src={Arrow} alt="" />
                                </Button>}
                       </Form>
                    </div>
                </Col>
            </Row>
            {shortUrl && <Row className='justify-content-center mt-3'>
                <Col xs = 'auto'>
                    {show && <Alert onClose={() => setShow(false)} dismissible variant='success' className="animate__animated animate__bounce animate__fast" style={{fontFamily: "Inter"}}><strong>Your Shortened URL: </strong> 
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>{generatedUrl}</a>
                    </Alert>}
                </Col>
            </Row>}
        </Container>
    </div>
  )
}
