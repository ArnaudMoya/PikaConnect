import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBCol, MDBRow } from "mdbreact";
import SignIN from './SignIN';
import SignUP from './SignUp';
import profil from './Profile';
import Home from './Home';


class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <MDBRow>
                        <MDBCol xl="5" md="6" className="mb-xl-0 mb-4">






                            <div className="btn-toolbar" role="toolbar">
                                <MDBBtnGroup className="mr-2">
                                <NavLink to="/Home">
                                    <MDBBtn color="blue lighten-2">
                                        <MDBIcon icon="home" />
                                    </MDBBtn>

                                    </NavLink>
                                    
                                    <NavLink to="/Login">
                                        <MDBBtn color="light-blue lighten-2">
                                            <MDBIcon icon="user" /> LOGIN
                                        </MDBBtn>
                                    </NavLink>
                                    <NavLink exact to="/Register">
                                        <MDBBtn color="cyan lighten-2">

                                            <MDBIcon fab icon="twitter" /> REGISTER
                                        </MDBBtn></NavLink>
                                        <NavLink exact to="/Profile">
                                        </NavLink>
                                </MDBBtnGroup>
                            </div>
                        </MDBCol>

                    </MDBRow>
                    <br/>
                    <br/>


                    <Switch>
                        <Route exact path="/Home" component={Home}/>
                        <Route exact path="/Login" component={SignIN} />
                        <Route path="/Register" component={SignUP} />
                        <Route path="/Profil" component={profil} />
                    </Switch>
                    
                </div>
            </BrowserRouter>
        );
    }
}

export default Routing;