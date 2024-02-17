import dotenv from "dotenv";
import { parseEnv, z } from "znv";

dotenv.config();

export const config = parseEnv(process.env, {
  LEN: z.number().int().min(3).max(4).default(3),
  ZEROS: z.number().int().nonnegative().max(36).default(0),
});

export type Config = typeof config;
