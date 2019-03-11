import React, { Component } from 'react';
import { Link, Route, NavLink } from 'react-router-dom';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";


class SignIN extends Component {
  constructor(props) {
    super(props)
    this.state = { mail: "", password: "", import: "", connected: false }
  }
  updateEmailField = (event) => {

    this.setState({
      mail: event.target.value
    })
  }

  updateMdp = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  changement = (event) => {
    if (this.state.connected === true) {

    }

  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { mail, mdp } = this.state;


    fetch("auth/signin",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state),
      })
      .then(res => res.json())
      .then(res => {
        if (res.length > 0) {
          this.setState({ import: res, connected: true })
          console.log(res)
          localStorage.setItem('res',res)
          console.log(this.state.import)
        }
      }

      )
      
  
  
    }




  render() {

    let test = "";

    if(this.state.connected === true){
      test = <div className="text-center mt-4">
      <NavLink exact to="/Profil">
        <MDBBtn
          color="cyan lighten-2"
          className="mb-3"
          type="submit"
          disabled={this.state.connected}

        >Connect
  </MDBBtn>
  </NavLink>

      </div>
    }

    return (
      <div>
        {/* <h1>{JSON.stringify(this.state, 1, 1)}</h1> */}

        <MDBContainer>
          <MDBRow>
            <MDBCol md="6" sm="8">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardHeader className="form-header deep-blue-gradient rounded text-center">
                    <h3 className="my-3 ">
                      <MDBIcon icon="lock" /> Login
                </h3>
                  </MDBCardHeader>
                  <form onSubmit={this.handleSubmit}>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        value={this.state.email}
                        onChange={this.updateEmailField}
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        onChange={this.updateMdp}
                        value={this.state.password}
                        validate
                      />
                    </div>

                     <div className="text-center mt-4">
                    {/* <NavLink exact to="/Profil"> */}
                      <MDBBtn
                        color="light-blue"
                        className="mb-3"
                        type="submit"
                       

                      >Verif
                </MDBBtn>
                {/* </NavLink> */}
                    {test}
                    </div>
                  </form>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </div>



    )
  }
}

export default SignIN;