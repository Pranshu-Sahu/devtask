import { NextResponse } from "next/server";

// Mocked data store (in-memory)
let users = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password, fullName, phoneNumber, companyName, isAgency } = body;

    // Basic validation
    if (!email || !password || !fullName) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      password, // In production, hash the password!
      fullName,
      phoneNumber,
      companyName,
      isAgency,
      avatarUrl: null,
    };
    users.push(newUser);

    return NextResponse.json(
      { user: { ...newUser, password: undefined } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
