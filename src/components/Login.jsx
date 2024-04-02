import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate=useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/${username}/${password}`);
      console.log(response.data); // Handle response data as needed
      setLoggedIn(true);
      alert('Logged in successfully!');
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="page-container" style={{ backgroundImage: 'url(\'https://cdn.shopify.com/s/files/1/1246/6441/files/Shopify_Retail_BlogHeader_Inventory_Control_FA.jpg?v=1641496247\')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
      <div className="login-container">
        {loggedIn ? (
          <div>
            <h2>Welcome, {username}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>Login</h2>
            <TextField
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} variant="contained">Login</Button>
            <Button color="inherit" component={Link} to="/registration">Registration</Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
