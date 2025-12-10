import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  password: z.string().min(8),
  role: z.enum(["host", "worker"]),
  age: z.number().int().min(18).optional(),
  experience: z.number().int().min(0).optional(),
  skills: z.array(z.string()).optional(),
  pricePerHour: z.number().min(0).optional(),
  bio: z.string().optional(),
  images: z.array(z.string()).optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const eventSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  date: z.string(),
  address: z.string().min(3),
  eventType: z.string().min(2),
  requiredStaff: z.number().int().min(1),
  budget: z.number().min(0),
});

export const hireStatusSchema = z.enum([
  "pending",
  "accepted",
  "rejected",
  "completed",
]);

export const hireSchema = z.object({
  eventId: z.string(),
  workerId: z.string(),
  message: z.string().min(3),
});
