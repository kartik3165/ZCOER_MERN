// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import SignIn from './pages/login.jsx';
import SignUp from './pages/signup.jsx';


function App() {
  return (
    <div>
      {Header()}
      <SignIn />
      <SignUp />
      {Footer()}
    </div>
  );
}

export default App;
