export const JWT_PASSWORD ="123123";

import dotenv from "dotenv";
dotenv.config();

export const MONGO_URL = process.env.MONGO_URL as string;

if (!MONGO_URL) {
    throw new Error("MONGO_URL is not defined in .env file");
}
