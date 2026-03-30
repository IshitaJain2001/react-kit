 import { connectDB } from "@/lib/db";
import Bug from "@/models/Bug";

export async function GET() {
  await connectDB();

  const bugs = await Bug.find();

  return Response.json({ bugs });
}