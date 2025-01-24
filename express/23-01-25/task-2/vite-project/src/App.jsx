import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/SignUp';

const App = () => {
  return (
    <div>
    <Router>
      <Link to="/login" className="btn btn-primary">Login</Link> <br /><br />
      <Link to="/signup" className="btn btn-primary">SignUp</Link>
      <br />
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
    </div>
  );
};

export default App;
