import prisma from "../database/database";
import { User } from "@prisma/client";


export type CreateProduct = Omit<User, "id">
async function getProducts() {
  const users = await prisma.user.findMany();
  return users;
}

async function getProduct(id: number) {
  const user = await prisma.user.findUnique({
    where: {id}
  })
  return user;
}

async function createProduct(product: CreateProduct) {
  await prisma.user.create({
    data: product
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;