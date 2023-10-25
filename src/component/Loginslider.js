import React ,{useState}from 'react'

import Login from './Login'
import Loginclg from './Loginclg';
export default function Loginslider() {
    const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };
    return(
        <div>
            <div className="container">
      <div className={showLoginForm ? 'app front' : 'app back'}>
        <div className="header">
          <span className="info">{showLoginForm ? 'Login' : 'Sign Up'}</span>
          <div className="prompt">
            <span className="ask">
              {showLoginForm ? "Don't have an account?" : 'Have an account?'}
            </span>
            <button
              className={`btn ${showLoginForm ? 'signup' : 'login'}`}
              onClick={toggleForm}
            >
              {showLoginForm ? 'Sign up' : 'Login'}
            </button>
          </div>
        </div>
        <div className="main">
          <div className="user_field">
            <span className="option_text">or use your account instead</span>
            <form className="_details">
              <div className="textbox">
                <input type="text" placeholder="Username or Email" />
                <span className="input_detail">Username or Email</span>
              </div>
              <div className="textbox">
                <input type="password" placeholder="Password" />
                <span className="input_detail">Password</span>
              </div>
            </form>
          </div>
          <button className="btn login">
            {showLoginForm ? 'Login' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
        </div>
        )
}
