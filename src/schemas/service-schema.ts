import { z } from "zod";

export const createServiceSchema = z.object({
  name: z.string().min(3, "Service name minimum 3 characters"),

  url: z.string().url("Please enter valid URL"),

  category: z.string().min(1, "Category is required"),
});

export const updateServiceSchema = z.object({
  id: z.number().min(1, "id is required"),

  name: z.string().min(3, "Service name minimum 3 characters"),

  url: z.url("Please enter valid URL"),

  category: z.string().min(1, "Category is required"),

  lastLatency: z.number(),

  lastCheckedAt: z.string(),
});

export type CreateServiceFormData = z.infer<typeof createServiceSchema>;

export type UpdateServiceFormData = z.infer<typeof updateServiceSchema>;
