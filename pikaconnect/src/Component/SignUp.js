import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../CSS/App.css'
import {
    MDBContainer,
    MDBRow, MDBCol, MDBBtn,
    MDBModal,
    MDBModalFooter,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBCardHeader,

    MDBInput
} from 'mdbreact';



class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: "test@email.com",
            mdp: "",
            mdpverif: "",
            name: "",
            nickname: "",
            flash: "",
            modal: false

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { mail, mdp, name, nickname } = this.state;
        const thor = {
            email: mail, password: mdp, name: name, lastname: nickname
        }
        if (this.state.mdp === this.state.mdpverif) {
            fetch("/auth/signup",
                {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(thor),
                })
                .then(res => res.json())
                .then(
                    res => this.setState({ "flash": res.flash }),
                    err => this.setState({ "flash": err.flash })
                )
        } else {
            console.log('nononon')
        }
        this.toggle(event)
        

    }

    updateEmailField = (event) => {

        this.setState({
            mail: event.target.value
        })
    }

    updateMdp = (event) => {
        this.setState({
            mdp: event.target.value
        })
    }
    updateMdpverif = (event) => {
        this.setState({
            mdpverif: event.target.value
        })
    }
    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    updateNickname = (event) => {
        this.setState({
            nickname: event.target.value
        })
    }
    affichejson = () => {
        console.log(this.state)
    }

    toggle = (event) => {
        event.preventDefault()
        
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {





        return (

            <div>
                
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6" lg="6" sm="5" >
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardHeader className="form-header cyan lighten-2 rounded text-center">
                                        <h3 className="my-3">
                                            <MDBIcon icon="lock" /> Register
                </h3>
                                    </MDBCardHeader>
                                    <form onSubmit={this.toggle}>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Your name"
                                                icon="user"
                                                value={this.state.name}
                                                onChange={this.updateName}
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Your Nickname"
                                                icon="user"
                                                value={this.state.nickname}
                                                onChange={this.updateNickname}
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                className="test"

                                            />
                                            <MDBInput
                                                label="Your email"
                                                icon="envelope"
                                                value={this.state.mail}
                                                onChange={this.updateEmailField}
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />

                                            <MDBInput
                                                label="Your password"
                                                icon="lock"
                                                value={this.state.mdp}
                                                onChange={this.updateMdp}
                                                group
                                                type="password"
                                                validate
                                            />
                                            <MDBInput
                                                label="Confirm your password"
                                                icon="lock"
                                                value={this.state.mdpverif}
                                                onChange={this.updateMdpverif}
                                                group
                                                type="password"
                                                validate

                                            />
                                        </div>

                                        <div className="text-center mt-4">
                                            <MDBContainer>
                                               
                                                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                                                    
                                                    
                                                    <MDBModalFooter>
                                                    <NavLink exact to="/Login">
                                                        <MDBBtn
                                                            color="light-blue"
                                                            className="testt"
                                                            type="submit"
                                                            
                                                        >
                                                            OK
                                                        </MDBBtn>
                                            </NavLink>
                                                    </MDBModalFooter>
                                                </MDBModal>
                                            </MDBContainer>
                                        
                                            <MDBBtn
                                                color="light-blue"
                                                className="mb-3"
                                                type="submit"
                                                onClick={this.handleSubmit}
                                            >
                                                Register
                </MDBBtn>
                                        
                                        </div>
                                    </form>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>



                {/* <MDBContainer className="float-right">
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={this.handleSubmit}>
                                <p className="h5 text-center mb-4">Sign up</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Your name"
                                        icon="user"
                                        value={this.state.name}
                                        onChange={this.updateName}
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your Nickname"
                                        icon="user"
                                        value={this.state.nickname}
                                        onChange={this.updateNickname}
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        className="test"

                                    />
                                    <MDBInput
                                        label="Your email"
                                        icon="envelope"
                                        value={this.state.mail}
                                        onChange={this.updateEmailField}
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />

                                    <MDBInput
                                        label="Your password"
                                        icon="lock"
                                        value={this.state.mdp}
                                        onChange={this.updateMdp}
                                        group
                                        type="password"
                                        validate
                                    />
                                    <MDBInput
                                        label="Confirm your password"
                                        icon="lock"
                                        value={this.state.mdpverif}
                                        onChange={this.updateMdpverif}
                                        group
                                        type="password"
                                        validate

                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="primary" type="submit">Register</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer> */}

            </div >





        )

    }
}
export default SignUp