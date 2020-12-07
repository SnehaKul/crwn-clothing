import React from 'react';
import './signin-style.scss';
import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email: '' , password: ''});
    }
    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({ [name]:value});
    }
    render(){
        return(
            <div className='sign-in'>
               <h2>I already have an account</h2>
               <span>Signin with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput 
                   name='email' 
                   type='email' 
                   handleChange = {this.handleChange}
                   label="email"
                   value={this.state.email} required/>
                  
                   <FormInput 
                   name='passowrd' 
                   type='password' 
                   handleChange = {this.handleChange}
                   label="password"
                   value={this.state.email} required/>
                  <div className='buttons'>
                   <CustomButton type='submit' >Sign In</CustomButton>
                   <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                       {' '}
                       Sign in with Google{' '}
                       </CustomButton>
                       </div>
               </form>
            </div>
        )
    }
}

export default SignIn;