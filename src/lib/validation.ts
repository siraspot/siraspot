import { z } from "zod";

export const generalInfoSchema = z.object({
    title: optionalString,
    description: optionalString,
  });