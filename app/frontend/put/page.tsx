"use client"
import { useState } from "react";

export default function PutStudent() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [marks, setMarks] = useState("");

    async function updateStudent(){
        const resp = await fetch("/api/student1",{
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ id, name, marks }),
        });
        const data = await resp.json();
        alert("Student updated successfully")
    }

    return (
        <>
            <h1>Student Management System</h1>
            <h2>Update a Student Record</h2>
            ID: <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            /> <br/>
            NAME:<input type="text" 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)} /> <br/>
            MARKS:<input type="number" 
                         value={marks} 
                         onChange={(e)=>setMarks(e.target.value)} /> <br/>
            <button onClick={updateStudent}>Update Student</button>
        </>
    );
}