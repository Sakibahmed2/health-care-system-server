import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllAdminFromDB = async (queryParams: any) => {
  const andCondition: Prisma.AdminWhereInput[] = [];

  if (queryParams.searchTerm) {
    andCondition.push({
      OR: [
        {
          name: {
            contains: queryParams.searchTerm,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: queryParams.searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  const whereCondition: Prisma.AdminWhereInput = { AND: andCondition };

  const result = await prisma.admin.findMany({
    where: whereCondition,
  });

  return result;
};

export const adminServices = {
  getAllAdminFromDB,
};
