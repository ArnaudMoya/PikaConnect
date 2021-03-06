import React, { Component } from 'react';
import {MDBCard, MDBCardBody, MDBCardImage,MDBInput, MDBCol } from 'mdbreact';
import { connect } from 'react-redux';


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: localStorage.getItem('donne'),
            token: localStorage.getItem('token')
            
        }
        console.log(this.state.profile)
    }

    componentWillMount(){
      

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
                                        value={this.props.user[0].name}
                                        
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your Nickname"
                                        icon="user"
                                        // value={this.props.user[0].lastname}
                                        
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
                                        // value={this.props.user[0].email}
                                        
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />

                                    
                        
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>





        )
    }


}
const mapStateToProps = (state) => {
    return {
        flash:  state.auth.token,
        user: state.auth.user
    }
};

export  default  connect(mapStateToProps)(Profile)
