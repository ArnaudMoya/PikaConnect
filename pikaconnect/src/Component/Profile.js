import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,MDBInput, MDBCol } from 'mdbreact';


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: {
                email: "homer.simpson@wildcodeschool.fr",
                name: "Homer",
                lastname: "Simpson",
                mdp:"kiki",
                res:localStorage.getItem('res')
            }
        }
        console.log(this.state.res)
        console.log(localStorage.getItem('res'))
        

    }

    render() {
        console.log(localStorage.getItem('res'))

        
        return (
            <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/teepublic/image/private/s--vQ1dvf3O--/t_Preview/b_rgb:fffffe,c_limit,f_jpg,h_630,q_90,w_630/v1489813788/production/designs/1332589_1.jpg" waves />
                    <MDBCardBody>
                    <MDBInput
                                        label="Your name"
                                        icon="user"
                                        value={this.state.profile.name}
                                        
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your Nickname"
                                        icon="user"
                                        value={this.state.profile.lastname}
                                        
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
                                        value={this.state.profile.email}
                                        
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />

                                    <MDBInput
                                        label="Your password"
                                        icon="lock"
                                        value={this.state.profile.mdp}
                                      
                                        group
                                        type="text"
                                        validate
                                    />
                        
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>





        )
    }


}

export default Profile;