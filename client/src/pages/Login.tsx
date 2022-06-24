import React, { useState, useEffect } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'

const initialState = {
  email: '',
  password: '',
}

const Login = () => {
  const [formValue, setFormValue] = useState(initialState)
  const { email, password } = formValue

  const handleSubmit = () => {}
  const onInputChange = () => {}

  return (
    <div
      style={{
        margin: 'auto',
        padding: '15px',
        maxWidth: '450px',
        alignContent: 'center',
        marginTop: '120px',
      }}
    >
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x">
          <h5>Sign In</h5>
          <MDBCardBody>
            <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
              <div className="col-md-12">
                <MDBInput
                  type="email"
                  value={email}
                  name="email"
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="col-md-12">
                <MDBInput
                  type="password"
                  value={password}
                  name="password"
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="col-12">
                <MDBBtn style={{ width: '100%' }} className="mt-2">
                  Login
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
          <MDBCardFooter>
            <Link to="/register">
              <p>Don't have an account ? Sign Up</p>
            </Link>
          </MDBCardFooter>
        </MDBIcon>
      </MDBCard>
    </div>
  )
}

export default Login
