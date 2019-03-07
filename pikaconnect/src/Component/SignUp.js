import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';



class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: "test@email.com",
            mdp: "",
            mdpverif: "",
            name: "",
            nickname: ""
        }
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




    render() {





        return (    
            
                <div>
                    <h1>{JSON.stringify(this.state, 1, 1)}</h1>
                    <MDBContainer className="float-right">
                        <MDBRow>
                            <MDBCol md="6">
                                <form>
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
                                        <MDBBtn color="primary">Register</MDBBtn>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>

            



        )

    }
}
export default SignUp