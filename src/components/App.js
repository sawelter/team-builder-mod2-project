import '../App.css';
import React, { useState } from 'react';
import Form from './Form.js';
import TeamMember from './TeamMember.js';


const myTeam = [
  {name: "Sawyer Welter", email: "sawyer@thewelters.com", role: "Trainee"},
  {name: "Pete Welter", email: "pete@thewelters.com", role: "Senior Developer"},
  {name: "Casey Harding", email: "casey@gmail.com", role: "Instructor"},
  {name: "John Doe", email: "john.doe@yahoo.net", role: "Junior Developer"},
]

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const [teamMembers, setTeamMembers] = useState(myTeam);
  const [formValues, setFormValues] = useState(initialFormValues);

  console.log(teamMembers);

  const change = (evt) => {

  }

  const submit = (evt) => {

  }

  return (
    <div className="App">
      <Form formValues="formValues" change={change} submit={submit}/>
      {teamMembers.map((person, idx) => {
        return <TeamMember teamMember={person} />
      })}
    </div>
  );
}

export default App;
