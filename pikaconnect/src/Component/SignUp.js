import React, { Component } from 'react';




class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: "test@email.com",
            mdp: "t",
            mdpverif: "t",
            name: "t",
            nickname: "t"
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
    affichejson =()=> {
        console.log(this.state)
    }




    render() {





        return (
            <div>
                <h1>{JSON.stringify(this.state, 1, 1)}</h1>
                <form>
                    <input type="email" value={this.state.mail} name="email" onChange={this.updateEmailField} />
                    <input type="mdp" value={this.state.mdp} name="Mdp" onChange={this.updateMdp} />
                    <input type="mdpverif" value={this.state.mdpverif} name="Mdpverif" onChange={this.updateMdpverif} />
                    <input type="name" value={this.state.name} name="Name" onChange={this.updateName} />
                    <input type="nickname" value={this.state.nickname} name="Nickname" onChange={this.updateNickname} />
                    <input type="button" value="Envoyer le formulaire" onClick={this.affichejson} />
                </form>



            </div>



        )

    }
}
export default SignUp