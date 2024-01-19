import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'

export default function Login() {
  return (
      <div className='form-body'>
          <div className='form-inner-body'>
              <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Retype Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <div className="d-grid gap-2">
                      <Button variant="dark" className='mt-3' >
                          Register
                      </Button>
                  </div>
              </Form>
              <div className='mt-4'>
                  <p>Already have an account? <a href=''>Login</a></p>

              </div>
          </div>
      </div>
  )
}
