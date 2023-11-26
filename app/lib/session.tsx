import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";

export function getSession() {
  return getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user.id;
}