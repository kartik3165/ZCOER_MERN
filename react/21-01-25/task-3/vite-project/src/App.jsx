// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
  
const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setName("");
    setEmail("");
    setPassword(""); 
  };

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <span>Enter Your Details </span> <br />
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button type="submit" disabled ={password == ''}>Submit</button>
      </form>
    </div>

  );


};export default App
