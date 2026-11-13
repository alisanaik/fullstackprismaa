"use client"
import { useState } from "react";

export default function DeleteStudent() {
    const [id, setId] = useState("");

    async function deleteStudent() {
        const resp = await fetch("/api/student1", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                { id }),
        });
        const data = await resp.json();
        alert("Student deleted successfully")
    }

    return (
        <>
            <h1>Student Management System</h1>
            <h2>Delete a Student Record</h2>
            
            ID: <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
            /> <br/>
            
            <button onClick={deleteStudent}>Delete Student</button>
        </>
    );
}