import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import PackingView from '../pages/packingView';
import Reg from '../pages/Register';
import About from '../pages/about';
import Adlog from '../pages/adlog';
import Dash from '../pages/dash';
import AddPark from '../admin/addpark';
import Viewuser from '../admin/viewuser';
import User from '../admin/userRequest';
function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="login/packingView" element={<PackingView />} />
          <Route path="login/Register" element={<Reg />} />
          <Route path="/about" element={<About />} />
          <Route path="AdminLogin" element={<Adlog />} />
          <Route path='AdminLogin/Dash' element={<Dash/>}/>
          <Route path='AddPark' element={<AddPark/>} />
          <Route path='Viewuser' element={<Viewuser/>}/>
          <Route path='User' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
