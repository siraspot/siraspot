import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  schema: z.object({
    NODE_ENV: z.string().default("development"),
    PORT: z.string().default("3000"),
  }),
});