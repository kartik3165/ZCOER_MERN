import React from 'react';
import SignIn from './pages/login';
import SignUp from './pages/signup';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

let auth= true;

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
