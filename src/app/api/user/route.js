import { NextResponse } from "next/server";

// Use the same in-memory array (or store in a separate file).
let users = [];

export async function GET(request) {
  // Example: Return all users (or only the current user).
  return NextResponse.json(users.map((u) => ({ ...u, password: undefined })));
}

export async function PUT(request) {
  try {
    const body = await request.json();
    // This is an example – in real usage, you'd authenticate, find the user, then update.
    const userIndex = users.findIndex((u) => u.id === body.id);
    if (userIndex === -1) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    users[userIndex] = { ...users[userIndex], ...body };
    return NextResponse.json(
      { user: { ...users[userIndex], password: undefined } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
