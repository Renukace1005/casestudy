import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './components/CreateUser';
import Users from './components/Users';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUser />} />
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;