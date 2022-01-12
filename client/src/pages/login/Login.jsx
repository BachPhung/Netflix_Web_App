import './Login.scss'
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext'
import {login} from '../../context/apiCalls'
export const Login = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {isFetching, dispatch} = useContext(AuthContext)
    const handleLogin = (e) =>{
      e.preventDefault();
      login({email,password},dispatch)
    }
    return (
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <form>
            <h1>Sign In</h1>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email or phone number" />
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" />
            <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Sign In</button>
            <Link to='register' className='link'>
              <span>
                New to Netflix? <b>Sign up now.</b>
              </span>
            </Link>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span>Learn more</span>.
            </small>
          </form>
        </div>
      </div>
    );
  }