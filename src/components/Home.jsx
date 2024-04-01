import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import '../styles/Home.css'; 
import Dashboard from './Dashboard';
 
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    
    <div className="container">

      <Dashboard></Dashboard>
      <b className="title"> SYN INVENTORY MANAGEMENT</b>
      {/* <div className="button-container">
        <b><Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/registration">Registration</Button></b>
      </div> */}
     
      
      <img className="image" src="https://softwareforbilling.files.wordpress.com/2019/03/89f77-1t2-za-pjpf4bptaefwviqq.gif" />
    </div>
  );
};

export default Home;
