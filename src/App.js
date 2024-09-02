
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formType) => {
    setCurrentForm(formType);
  };

  return (
    <div className="form-container">
      {currentForm === 'login' && <LoginForm toggleForm={toggleForm} />}
      {currentForm === 'signup' && <SignupForm toggleForm={toggleForm} />}
      {currentForm === 'forgot-password' && <ForgotPasswordForm toggleForm={toggleForm} />}

    </div>
  );
}

export default App;
