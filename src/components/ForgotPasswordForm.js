import React, { useState } from 'react';
import './FormStyles.css';
import { Icon } from '@iconify/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function ForgotPasswordForm({ toggleForm }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form>
      <h2>Forgot Password</h2>
      <p>Enter your email to reset your password</p>
      
      <label htmlFor="email">Email</label>
      <div className="input-container">
        <Icon icon="mdi:email" className="input-icon" />
        <input
          type="email"
          id="email"
          placeholder="Enter your Email"
          required
        />
      </div>
      
      <label htmlFor="new-password">New Password</label>
      <div className="input-container">
        <Icon icon="mdi:lock" className="input-icon" />
        <input
          type={showPassword ? 'text' : 'password'}
          id="new-password"
          placeholder="Enter new Password"
          required
        />
        <span
          className="password-toggle-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <button type="submit">Reset Password</button>
      <div className="toggle-link">
        <p>Remembered your password? <a href="#" onClick={() => toggleForm('login')}>Login</a></p>
      </div>
    </form>
  );
}

export default ForgotPasswordForm;
