import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllAdminFromDB = async (queryParams: any) => {
  const andCondition: Prisma.AdminWhereInput[] = [];

  const searchFieldArray = ["name", "email"];

  if (queryParams.searchTerm) {
    andCondition.push({
      OR: searchFieldArray.map((field) => ({
        [field]: {
          contains: queryParams.searchTerm,
          mode: "insensitive",
        },
      })),
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
