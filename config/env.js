import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;
export const MONGODB_URI = process.env.MONGODB_URI;
export const JWT_SECRET = process.env.MONGODB_URI;
export const JWT_EXPIRES_IN = process.env.MONGODB_URI;
export const ARCJET_KEY = process.env.ARCJET_KEY;
export const ARCJET_ENV = process.env.ARCJET_ENV;