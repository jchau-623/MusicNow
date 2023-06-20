import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import './AuthForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const loginDemoUser = async (e) => {
    e.preventDefault();
    let email = 'demo@aa.io'
    let password = 'password'
    await dispatch(login(email, password))
    history.push("/");
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-form-container'>
      <form className='signup-form' onSubmit={onLogin}>
        <div className='login-form-header'>
          <div className='login-logo'>
            <i className="fa-brands fa-spotify" />
            <div className="login-title">
              Musicfy
            </div>
          </div>
        </div>
            <h2>To continue, log in to Musicfy.</h2>
        <div className='login-form-content'>
          <div className='login-form-errors'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='login-form-div'>
            <label htmlFor='email'>Email Address</label>
            <input
              className='login-form-field-input'
              name='email'
              type='text'
              placeholder='Email address'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='login-form-div'>
            <label htmlFor='password'>Password</label>
            <input
              className='login-form-field-input'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <div className='login-button-container'>
              <button className='login-form-buttons' type='submit'>Login</button>
              <button className='login-form-buttons' type='submit' onClick={loginDemoUser}>Demo User</button>
              <NavLink className='login-form-buttons' to='/sign-up' id='login-link'>Sign up for Musicfy</NavLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
