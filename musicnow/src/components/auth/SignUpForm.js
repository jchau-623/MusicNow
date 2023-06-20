import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import './AuthForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('')
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
      const data = await dispatch(signUp(username, email, password, repeatEmail));
      console.log(data, 'this is data')
      setErrors(data)
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateRepeatEmail = (e) => {
    setRepeatEmail(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };


  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-form-container'>
      <form className='signup-form' onSubmit={onSignUp}>
        <div className='login-form-header'>
          <div className='login-logo'>
            <i className="fa-brands fa-spotify" />
            <div className="login-title">
              Musicfy
            </div>
          </div>
        </div>
          <h2>Sign up with your email address</h2>
        <div className='login-form-content'>
          <div className='login-form-errors '>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='login-form-div'>
            <label htmlFor='email'>What's your email?</label>
            <input
              className='login-form-field-input'
              type='text'
              name='email'
              onChange={updateEmail}
              placeholder='Enter your email.'
              value={email}
            />
          </div>
          <div className='login-form-div'>
            <label htmlFor='email'>Confirm your email</label>
            <input
              className='login-form-field-input'
              type='text'
              name='repeat_email'
              onChange={updateRepeatEmail}
              placeholder='Enter your email again.'
              value={repeatEmail}
            />
          </div>
          <div className='login-form-div'>
            <label htmlFor='password'>Create a password</label>
            <input
              className='login-form-field-input'
              type='password'
              name='password'
              onChange={updatePassword}
              placeholder='Create a password.'
              value={password}
            />
          </div>
          <div className='login-form-div'>
            <label>What should we call you?</label>
            <input
              className='login-form-field-input'
              type='text'
              name='username'
              placeholder='Enter a profile name.'
              onChange={updateUsername}
              value={username}
            />
          <div className='login-button-container'>
            <button className='login-form-buttons' type='submit'>Sign Up</button>
            <NavLink className='login-form-buttons' to='/login' id='login-link'>Have an account? Log in</NavLink>
          </div>
        </div>
          </div>
      </form>
    </div>
  );
};

export default SignUpForm;
