import React, { useState } from 'react';

function ManualForm() {
    const [class1, setClass] = useState("");
    const [team1, setTeam] = useState("");
    const [user1, setUser] = useState("");

    const addTeam = () => {}
    return (
        <div>
            <input
            type="text"
            placeholder="
            Class ID?? OR NAME??"
            onChange={(event) => {
                setClass(event.target.value);
            }}
            />
            <input
            type="text"
            placeholder="Team ID OR NAME??"
            onChange={(event) => {
                setTeam(event.target.value);
            }}
            />
             <input
            type="text"
            placeholder="User  (NAME OR ID OR EMAIL)"
            onChange={(event) => {
                setUser(event.target.value);
            }}
            />
            <button onClick={addTeam}> Create Team</button>
        </div>
    );
}

export default ManualForm