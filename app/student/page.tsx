export const instant = false;

import pool from "../../lib/db";

export default async function StudentPage() {
  const result = await pool.query("SELECT * FROM student");
  return(
    <>
      <h1>Student Details</h1>{
        result.rows.map((s: any) => (
          <div key={s.id}>
            <p>Name: {s.name}</p>
            <p>Marks: {s.marks}</p>
            <hr />
          </div>
        ))
      }
    </>
  )
}