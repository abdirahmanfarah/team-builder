import React, { useState, useEffect } from 'react';
import './App.css';
import Create from "./components/Form";


function App() {
  const [member, setMember] = useState([{
    name: "Bob", 
    email: "bobsaget@gmail.com",
    role: "backend"
  }]);


  return (
    <div className="App">
      <h1>Members</h1>
      

        {member.map((member, index) => {
          
          return (
            
            <div className = "member" key ={index}> 
              <h2>{member.name}</h2>
              <p>{member.email}</p>
              <p>{member.role}</p>
  
            </div>
          )
        })}
        <Create /> 
    </div>
  );
}

export default App;
