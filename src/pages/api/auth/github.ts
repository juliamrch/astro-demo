import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function post({ request }) {
  const { username, password } = await request.json();
  const user = await prisma.user.findUnique({
    where: { username, password } // Ensure password is hashed
  });
  if (user) {
    // Handle login success
  } else {
    // Handle login failure
  }
}