import React from 'react';
import './formR.scss';
// import incorrect from '../../static/incorrect.png'
// import correct from '../../static/correct.png'

export default class Registration extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        psw: "",
        confirmPsw: "",        
        isValid:false      
    }


    render() {
        return ( 
        <div className = "wrapper" >
            <h1 className = "title" >
                Registration Form 
            </h1> 
            <div className = "fields" >
                <div style={{color:'red'}}>
                    {
                        this.state.firstname.length === 0 && this.state.isValid ? 'This field can not be empty!' : null
                    }
                </div>
                <input className = "inputField" type = "text" name = "firstname" placeholder = "First Name" 
                    onChange = {(event) => this.setState({ firstname: event.target.value })} /> 
                <div style={{color:'red'}}>
                    {
                        this.state.lastname.length === 0 && this.state.isValid ? 'This field can not be empty!' : null
                    }
                </div>
                <input className = "inputField" type = "text" name = "lastname" placeholder = "Last Name" 
                    onChange ={(event) => this.setState({ lastname: event.target.value })} /> 
                <div style={{color:'red'}}>
                    {
                       this.state.email.length === 0 && this.state.email !== '/^\w+@\w+\.\w{2,4}$/i' && this.state.isValid ? 'Email not valid' : null
                    }
                </div>
                <input className = "inputField" type = "email" name = "email" placeholder = "Email" 
                    onChange = {(event) => this.setState({ email: event.target.value })} /> 
                <div style={{color:'red'}}>
                    {
                        this.state.psw.length < 8 && this.state.isValid ? 'Password must include minimum 8 chars!' : this.state.psw !== this.state.confirmPsw && this.state.isValid ? 'Passwords not match!' : null
                    }
                </div>
                <input className = "inputField" type = "password" name = "psw" placeholder = "Password" 
                    onChange = {(event) => this.setState({ psw: event.target.value })} /> 
                <input className = "inputField" type = "password" name = "confirmPsw" placeholder = "Repeat password" 
                    onChange = {(event) => this.setState({ confirmPsw: event.target.value })} /> 
                <button className = "button" onClick = {() => this.setState({isValid: true}) }> Register </button> 
            </div> 
        </div>
        );
    }
}