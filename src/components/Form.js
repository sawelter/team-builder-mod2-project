import React, { useState } from 'react'; 


export default function Form ( props ) {
    const { formValues, change, submit } = props;

    return(
        <form>
            <h2>New Team Member</h2>
            <label><span className="input-key">Name:</span> 
                <input 
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={change}
                />
            </label>
            <label><span className="input-key">Email:</span>  
                <input 
                    name="email"
                    type="text"
                    value={formValues.email}
                    onChange={change}
                />
            </label>
            <label><span className="input-key">Role:</span> 
                <input 
                    name="role"
                    type="text"
                    value={formValues.role}
                    onChange={change}
                />
            </label>
            <button onClick={submit}>Submit</button>
        </form>
    )
}