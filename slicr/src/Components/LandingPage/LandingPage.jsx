import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import './LandingPage.css'

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const url = 'https://slicr.onrender.com/api/v1/links/shorten';
  const requestBody = {
    long: 'linkedin.com/in/prosper-eravwuvieke-25b534163/'
  };
  let headers = new Headers();

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    console.log('me call')
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
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
              <h1 className='url-shortner'>Enter the URL to be shortened</h1>
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
                />
              </InputGroup>

              </Form>
              <div className='content'>
                <p>SLICR is a free tool to shorten URLs and generate short links</p>
                <p>URL shortener allows to create a shortened link making it easy to share</p>
              </div>
             </div>
         
          </Col>
        </Row>

        {shortUrl && (
          <div className="mt-4">
            <h5>Your Shortened URL:</h5>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          </div>
        )}
      </Container>
    </div>
  );
};

export default LandingPage;
