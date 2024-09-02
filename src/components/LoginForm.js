import React, { useState } from 'react'; 
import './FormStyles.css';
import { Icon } from '@iconify/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

function LoginForm({ toggleForm }) {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);  

  return (
    <form>
      <h2>Welcome back!!</h2>
      <p>Log in to continue your journey.</p>
      <label htmlFor="email">Email address</label>
      <div className="input-container">
        <Icon icon="mdi:email" className="input-icon" />
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>

      <label htmlFor="password">Password</label>
      <div className="input-container">
        <Icon icon="mdi:lock" className="input-icon" />
        <input
          type={showConfirmPassword ? 'text' : 'password'}  
          id="login-password"
          placeholder="Password"
          required
        />
        <span
          className="password-toggle-icon"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <div className="remember-forgot">
        <label>Remember Me <input type="checkbox" /> 
        </label>
        <a href="#" onClick={() => toggleForm('forgot-password')}>Forgot Password?</a>
      </div>

      <button type="submit">Login</button>
      <hr />
      <div className="other-signup">
        <div className="google">
          <Icon icon="flat-color-icons:google" width="1.3rem" height="1.3rem" />
          <span>Sign in with Google</span>
        </div>
        <div className="apple">
          <Icon icon="bi:apple" width="1.3rem" height="1.3rem" style={{ color: 'Black' }} />
          <span>Sign in with Apple</span>
        </div>
      </div>

      <div className="toggle-link">
        <p>Don't have an account? <a href="#" onClick={() => toggleForm('signup')}>Sign up</a></p>
      </div>
    </form>
  );
}

export default LoginForm;
