// LoginForm.js
import React, { useState } from 'react';
import { LoginFormStyles } from '../styles/LoginFormStyles';
import logoImage from '../assets/logo.png'; // Import your logo image

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    if (username === 'user' && password === 'password') {
      setError('');
      alert('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={LoginFormStyles.container}>
      <img src={logoImage} alt="Logo" style={LoginFormStyles.logo} />
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={LoginFormStyles.input}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={LoginFormStyles.input}
      />
      <br />
      <button onClick={handleLogin} style={LoginFormStyles.button}>
        Login
      </button>
      <div style={LoginFormStyles.error}>{error}</div>
      <p style={{ marginTop: '20px' }}>
        Don't have an account? <span style={LoginFormStyles.link}>Sign up</span>
      </p>
    </div>
  );
};

export default LoginForm;
