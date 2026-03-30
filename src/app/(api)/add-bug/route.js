
import { connectDB } from "@/lib/db";
import Bug from "@/models/Bug";
export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const bug = await Bug.create(body);

  return Response.json({ success: true, bug });
}