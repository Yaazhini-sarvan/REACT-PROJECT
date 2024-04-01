import React, { useState } from 'react';
import '../styles/Registration.css'; // Importing the CSS file

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {

    setRegistered(true);
    alert('Registered successfully!');
  };

  return (
    <div className="image" style={{ backgroundImage: 'url(\'https://miro.medium.com/v2/resize:fit:1358/0*c2lAlCKN721_oFYo.gif',backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>

    <div className="registration-container">
     
      {registered ? (
        <div>
          <h2>Registration Successful!</h2>
          <p>Your username: {username}</p>
          <p>Your email: {email}</p>
        </div>
      ) : (
        <div>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default Registration;
