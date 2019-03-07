import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
            mail:"test@email.com"
        }
    }
  
    updateEmailField = (event) => { 
    
this.setState({mail: event.target.value})


  }
  
  
  
  
    render() {





        return (
            <div>
                 <h1>{this.state.mail}</h1>
                 <ul>
                <li><input type="email" value={this.state.mail} name="email" onChange={this. updateEmailField}/></li>
                 
                 
                </ul>
            </div>


        )

    }
}
export default SignUp