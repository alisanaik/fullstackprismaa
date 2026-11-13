"use client"
import { useEffect, useState } from "react";

export default function GetStudents() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        async function loadStudents() {
            const resp = await fetch("/api/student1");
            const data = await resp.json();
            setStudents(data);
        }
        loadStudents();
    }, []);
    return (
        <>  
          <h1>Student Management System</h1>
          <h2>Students List</h2>
          {
            students.map((s:any)=>(
                <div key={s.id}>
                    <p>ID:{s.id}</p>
                    <p>Name:{s.name}</p>
                    <p>Mark:{s.marks}</p>
                    <hr />
                </div>
            ))
          }
        </>
        );
    }