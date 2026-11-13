"use client"
import { useState } from "react";

export default function PostStudents() {
    const [name, setName] = useState("");
    const [marks, setMarks] = useState("");

    async function addStudents(){
        const resp = await fetch("/api/student1",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,marks}),
        })
        const data = await resp.json();
        alert("Student added successfully")
    }
    return (
        <>
            <h1>Student Management System</h1>
            <h2>Post a new Student Record</h2>
            NAME:<input type="text" 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)} /> <br/>
            MARKS:<input type="number" 
                         value={marks} 
                         onChange={(e)=>setMarks((e.target.value))} /> <br/>
            <button onClick={addStudents}>Post Student</button>
        </>
    );
}