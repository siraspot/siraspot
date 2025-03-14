import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        POSTGRES_URL: z.string().min(1),
    POSTGRES_PRISMA_URL: z.string().min(1),
    POSTGRES_URL_NO_SSL: z.string().min(1),
    POSTGRES_URL_NON_POOLING: z.string().min(1),
    POSTGRES_USER: z.string().min(1),
    POSTGRES_HOST: z.string().min(1),
    POSTGRES_PASSWORD: z.string().min(1),
    POSTGRES_DATABASE: z.string().min(1),
    CLERK_SECRET_KEY: z.string().min(1),
    BLOB_READ_WRITE_TOKEN: z.string().min(1),
    OPENAI_API_KEY: z.string().min(1),
    STRIPE_SECRET_KEY: z.string().min(1),
    }
  schema: z.object({
    NODE_ENV: z.string().default("development"),
    PORT: z.string().default("3000"),
  }),
});