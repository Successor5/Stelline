import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AboutUs} from "./Pages/AboutUs/Component/AboutUs";
import { LandingPage } from './Pages/LandingPage/Component/LandingPage';
import { Login } from './Pages/LogIn/Conponent/login';
import { SignuP } from './Pages/SignUP/Conponent/Signup';
import { Authentication } from './Pages/Authentication/Conponent/Authentication';
function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
         
          <Route  path="/Authentication" element={< Authentication/>}/>
          <Route  path="/SignUp" element={<SignuP/>}/>
            <Route  path="/AboutUs" element={<AboutUs/>}/>
            <Route  path="/LogIn" element={<Login/>}/>
            <Route path="/" element={<LandingPage/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
