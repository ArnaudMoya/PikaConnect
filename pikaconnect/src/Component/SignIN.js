import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";


class SignIN extends Component {
  constructor(props) {
    super(props)
    this.state = {flash:"", mail: "", password: "", import: "", connected: false, token: "" }
    this.flash="";
  }
  componentWillMount() {




    // this.state.token = toki
    // console.log(this.state.token)
    // if ((this.state.token !== "") && (this.state.token !== null)) {
    //   this.props.history.push("/Profil")
    // }

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


    fetch("auth/signin",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(this.state),
      })
      .then(res => {
        if (res.ok)
          return res.json()
        else
          throw new Error(res.statusText);
      })
      .then(res => {
        this.setState({ flash: res.message })
        if (res.results.length > 0) {
          this.props.dispatch(
            {
              type: "CREATE_SESSION",
              user: res.results,
              token: res.token
            }
          )
          console.log(res)
          this.props.history.push("/Profil")

          
        }
      }
      )
  }

  render() {

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

 const mapStateToProps = (state) => {
  return {
      flash:  state.auth.token,
  }
};

export default connect(mapStateToProps)(SignIN);
