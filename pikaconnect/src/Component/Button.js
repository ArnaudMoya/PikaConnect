import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const Button = () => {
  return (
    <Fragment>
      <MDBBtn color="primary">Primary</MDBBtn>
      <MDBBtn>Default</MDBBtn>
      <MDBBtn color="secondary">Secondary</MDBBtn>
      <MDBBtn color="success">Success</MDBBtn>
      <MDBBtn color="info">Info</MDBBtn>
      <MDBBtn color="warning">Warning</MDBBtn>
      <MDBBtn color="danger">Danger</MDBBtn>
    </Fragment>
  );
}

export default Button;