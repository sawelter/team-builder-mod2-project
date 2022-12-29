import React, { useState } from 'react'; 


export default function Form ( props ) {
    const { formValues, update, submit } = props;


    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }


    return(
        <form>
            <h2>New Team Member</h2>
            <label><span className="input-key">Name:</span> 
                <input 
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={onChange}
                    placeholder="Enter new team member name here."
                />
            </label>
            <label><span className="input-key">Email:</span>  
                <input 
                    name="email"
                    type="text"
                    value={formValues.email}
                    onChange={onChange}
                    placeholder="Enter new team member email here."
                />
            </label>
            <label><span className="input-key">Role:</span> 
                <select value={formValues.role} name="role" onChange={onChange}>
                    <option value="">-----Select a Role-----</option>
                    <option value="Student">Student</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Team Manager">Team Manager</option>
                </select>
            </label>
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}