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
  let key = 0;

  const update = (inputName, inputValue) => {
    // set the form values
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submit = () => {
    // update key to be used for new person
    key++;
    // create a new object, set to the values
    const newTeamMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    }

    // setTeamMembers: teamMembers.concat(new object)
    setTeamMembers(teamMembers.concat(newTeamMember));

    // reset the form values to initial
    setFormValues({name: "", email: "", role: ""});
  }

  return (
    <div className="App">
      <Form formValues={formValues} update={update} submit={submit}/>
      {teamMembers.map((person, idx) => {
        key++;
        return <TeamMember teamMember={person} key={idx} />
      })}
    </div>
  );
}

export default App;
