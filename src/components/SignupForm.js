import React, { useState } from 'react';
import './FormStyles.css';
import { Icon } from '@iconify/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

function SignupForm({ toggleForm }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form>
      <h2>Sign up and ignite your curiosity.</h2>
      
      <label htmlFor="username">Username</label>
      <div className="input-container">
        <Icon icon="mdi:account" className="input-icon" />
        <input type="text" id="username" placeholder="Enter your Username" required />
      </div>

      <label htmlFor="email">Email</label>
      <div className="input-container">
        <Icon icon="mdi:email" className="input-icon" />
        <input type="email" id="email" placeholder="Enter your Email" required />
      </div>

      <label htmlFor="Gender">Gender</label>
      <select id="Gender" name="Gender" required>
        <option value="" disabled selected>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="Others">Others</option>
      </select>

      <label htmlFor="country">Country</label>
      <select id="country" name="country" required>
        <option value="" disabled selected>Select Country</option>
        <option value="Afghanistan">Afghanistan</option>
        <option value="China">China</option>
        <option value="Denmark">Denmark</option>
        <option value="Finland">Finland</option>
        <option value="Germany">Germany</option>
        <option value="India">India</option>
        <option value="Japan">Japan</option>
        <option value="Maldives">Maldives</option>
        <option value="Nepal">Nepal</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Qatar">Qatar</option>
        <option value="Russia">Russia</option>
        <option value="Sri Lanka">Sri Lanka</option>
      </select>

      <label htmlFor="password">Password</label>
      <div className="input-container">
        <Icon icon="mdi:lock" className="input-icon" />
        <input
          type={showPassword ? 'text' : 'password'}
          id="signup-password"
          placeholder="Enter your Password"
          required
        />
        <span
          className="password-toggle-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <label htmlFor="confirm-password">Confirm Password</label>
      <div className="input-container">
        <Icon icon="mdi:lock" className="input-icon" />
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          id="confirm-password"
          placeholder="Re-enter your Password"
          required
        />
        <span
          className="password-toggle-icon"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <button type="submit">Sign Up</button>
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
        <p>Already have an account? <a href="#" onClick={() => toggleForm('login')}>Login</a></p>
      </div>
    </form>
  );
}

export default SignupForm;
