import React, { useState } from 'react';
import Form from './Components/Form';
import './App.css';

function App() {
  const [teamMembers, addTeamMember] = useState([]);

  return (
    <div className="App">
      <h1>Tigers Team List</h1>
      {
        teamMembers.map(member => {
          return (
            <div className="teamList">
              <h3>Name: {member.name}</h3>
              <h3>Email: {member.email}</h3>
              <h3>Role: {member.role}</h3>
            </div>
          )
        })
      }
      <Form teamMembers={teamMembers} addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
