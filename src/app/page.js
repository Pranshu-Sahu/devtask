// src/app/page.js
import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the welcome page
  redirect("/welcome");

  // This return is never reached because redirect() immediately sends the user to /welcome.
  return null;
}
