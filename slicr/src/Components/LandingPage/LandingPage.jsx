import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import './LandingPage.css'

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [longUrlBackHalf, setLongUrlBackHalf] = useState('');
  const [shortUrlBackHalf, setShortUrlBackHalf] = useState('');
  const [customBackHalf, setCustomBackHalf] = useState('');
  const url = 'https://slicr.onrender.com/api/v1/links/shorten';
  const requestBody = {
    long: `linkedin.com/in/${longUrl}`
  };
  const requestBodyBackHalf = {
    long: `linkedin.com/in/${longUrlBackHalf}`,
    "custom": customBackHalf
  };
  let headers = new Headers();

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    setLongUrl('');
    setLongUrlBackHalf('');
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data.data);
        setShortUrl(data.data.generatedUrl);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
   
  };
  const handleUrlSubmitBackHalf = (e) => {
    e.preventDefault();
    setLongUrl('');
    setLongUrlBackHalf('');
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBodyBackHalf)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data.data);
        setShortUrlBackHalf(data.data.generatedUrl);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
   
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Logic to retrieve the original long URL based on the short URL
    // You can implement a search functionality here to look up the long URL
  };

  return (
    <div >
      <Container className="mt-5">
        <Row className='justify-content-center'>
            <Col xs ='auto'>
            <h1 className='title'>SLICR</h1>
            </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs = 'auto'>
             <div className='box shadow-lg p-3 mb-5 bg-white rounded'>
              <h2 className='url-shortner'>Enter the URL to be shortened</h2>
              <Form onSubmit={handleUrlSubmit}>
              <InputGroup className="mb-3">
                <Button type = 'submit' variant="outline-secondary" id="button-addon1" className='btn-shorten'>
                 Shorten Url
                </Button>
                <Form.Control
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  value = {longUrl}
                  onChange={(e)=>{setLongUrl(e.target.value)}}
                  placeholder='Enter Long Url'
                />
              </InputGroup>
              </Form>
              <Form onSubmit={handleUrlSubmitBackHalf}>
              <InputGroup className="mb-3">
                <Button type = 'submit' variant="outline-secondary" id="button-addon1" className='btn-shorten'>
                 Shorten with a Custom Backhalf
                </Button>
                <Form.Control
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  value = {longUrlBackHalf}
                  onChange={(e)=>{setLongUrlBackHalf(e.target.value)}}
                  placeholder='Enter Long Url'
                />
                <Form.Control placeholder='Enter Custom Backhalf' value={customBackHalf} onChange={(e)=>{setCustomBackHalf(e.target.value)}}  />
              </InputGroup>

              </Form>
              <div className='content'>
                <p>SLICR is a free tool to shorten URLs and generate short links</p>
                <p>URL shortener allows you to create a shortened link, making it easy to share</p>
              </div>
              {shortUrl && (
                <div className="mt-4 content">
                  <h5>Your Shortened URL:</h5>
                  <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
                </div>
                )}
                {shortUrlBackHalf && (
                <div className="mt-4 content">
                  <h5>Your Shortened URL:</h5>
                  <a href={shortUrlBackHalf} target="_blank" rel="noopener noreferrer">{shortUrlBackHalf}</a>
                </div>
                )}
             </div>
         
          </Col>
        </Row>

       
      </Container>
    </div>
  );
};

export default LandingPage;
