import { PrismaClient } from '@prisma/client';
import type { APIRoute } from 'astro';

const prisma = new PrismaClient();

export const post: APIRoute = async ({ request }) => {
  const { username, password } = await request.json();

  // Find the user with the provided username and password
  const user = await prisma.user.findUnique({
    where: {
      username: username,
      // You should hash the password in a real application
      password: password,
    },
  });

  if (user) {
    // Handle successful authentication
    return new Response(JSON.stringify({ message: 'Authenticated successfully' }), { status: 200 });
  } else {
    // Handle failed authentication
    return new Response(JSON.stringify({ message: 'Authentication failed' }), { status: 401 });
  }
};