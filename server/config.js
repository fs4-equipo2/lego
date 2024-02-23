import { config } from "dotenv";
config();

export const PORT = 3001;
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET;
