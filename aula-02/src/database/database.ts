import { PrismaClient } from '@prisma/client/edge';
const prisma = new PrismaClient()

import dotenv from "dotenv";

dotenv.config();

const {
  HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE
} = process.env;

export default prisma;

