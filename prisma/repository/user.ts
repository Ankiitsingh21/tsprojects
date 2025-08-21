import { PrismaClient } from '../src/generated/prisma'; // matches your output path

const prisma = new PrismaClient();

async function insertUser(email: string, firstName: string, lastName: string, password: string) {
  const user = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password,
    },
  });

  console.log('User created:', user);
  return user;
}
