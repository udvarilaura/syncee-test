import React, { useState } from 'react';
import './log-in-form.style.css'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js';
import ValidatePassword from '../validations/validate-password.component.jsx'
import ValidateEmail from '../validations/validate-email.component';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const logGoogleUser = async (event) => {
    const {user} = await signInWithGooglePopup();
    console.log(user);
    await createUserDocumentFromAuth(user)

    event.preventDefault();
    };

    
  const navigate = useNavigate();
    
  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/home', {state: {email: email, password: password}});
    

    const errors = {};

    if (!ValidateEmail(email)) {
      errors.email = "Invalid email format";
    }

    if (!ValidatePassword(password)) {
      errors.password =
        "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 5 characters long";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  };

  const googleLogo = `https://ps.w.org/google-site-kit/assets/icon-128x128.png`

  return (
    <form className="big-form" onSubmit={handleSubmit}>
        
      <button onClick={logGoogleUser} className='google-login-button'>
          <img src={googleLogo} className='google-logo' alt=""/> Sign in with Google
      </button>
        
      <br /><label htmlFor="email">Email*</label><br />
      <input
        className="input-field"
        id="user-email"
        type='email'
        value={email}
        placeholder="mail@website.com"
        onChange={(event) => {
          setEmail(event.target.value)
          console.log(event.target.value)
        }}
        required
      />
      {errors.email && <p>{errors.email}</p>}
      <br /><span>Password*</span><br />
      <input
        className="input-field"
        id="password"
        value={password}
        type='password'
        placeholder="Min. 5 character"
        onChange={(event) => {setPassword(event.target.value)
          console.log(event.target.value)}}
        required
      />
      {errors.password && <p>{errors.password}</p>}
      <br />
      <div className="remember-forgot-password">
        <label className="remember-me">
          <input type="checkbox" id="remember"/>
          Remember me
        </label>
        <a className="forgot-password" href='/'>Forgot password?</a>
      </div>
      <button className="input-field login-button" type="submit" onClick={()=>{
        console.log(`Email: ${email} password: ${password}`);
      }}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;