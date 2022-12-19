import prisma from '../../../prisma/client';

const getAll = async () => await prisma.user.findMany();

export { getAll };
