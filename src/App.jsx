import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Signup from './components/Signup';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
     <Route path='/forgot' element={<ForgotPassword/>}/>
     <Route path='signup' element={<Signup/>}/>
    </Routes>
   </BrowserRouter>
  );
};

export default App;