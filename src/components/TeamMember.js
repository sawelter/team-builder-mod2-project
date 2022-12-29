import React from 'react';
import styled from 'styled-components';


export default function TeamMember(props) {
    // props includes team member
    const { name, email, role } = props.teamMember;

    return (
        <div className="team-member-container" >
            <div className="row">
                <div className="key-content">Name</div>
                <div className="value-content">{name}</div>
            </div>
            <div className="row">
                <div className="key-content">Email</div>
                <div className="value-content">{email}</div>
            </div>
            <div className="row">
                <div className="key-content">Role</div>
                <div className="value-content">{role}</div>
            </div>
            
        </div>
    );
}