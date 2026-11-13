import {NextResponse, NextRequest} from "next/server";
import pool from "../../../lib/db";

//GET
export async function GET() {
    const result = await pool.query("SELECT * FROM student");
    return NextResponse.json(result.rows);
}

//POST
export async function POST(req: NextRequest) {
    const { name, marks } = await req.json(); //receive
    const result = await pool.query("INSERT INTO student (name, marks) VALUES ($1, $2) RETURNING *", [name, marks]);
    return NextResponse.json(result.rows[0]);
}

//PUT
export async function PUT(req: NextRequest) {
    const { id, name, marks } = await req.json(); 
    const result = await pool.query("UPDATE student SET name=$1, marks=$2 WHERE id=$3 RETURNING *", [name, marks, id]);
    return NextResponse.json(result.rows[0]);
}

//DELETE
export async function DELETE(req: NextRequest) {
    const { id } = await req.json();
    const result = await pool.query("DELETE FROM student WHERE id=$1 RETURNING *", [id]);
return NextResponse.json(result.rows[0]);

}