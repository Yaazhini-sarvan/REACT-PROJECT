import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
 import Login from '../components/Login';
 import Registration from '../components/Registration';
import Home from '../components/Home';
const App=()=>
{
    return(
        <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
};

export default App;