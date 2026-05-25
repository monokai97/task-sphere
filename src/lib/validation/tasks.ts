import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z.string().trim().min(3, { message: 'El título debe tener al menos 3 caracteres.' }),
  description: z.string().optional(),
  position: z.string(),
});

export const updateTaskSchema = z.object({
  title: z.string().trim().min(3).optional(),
  description: z.string().optional(),
  completed: z.boolean().optional(),
  position: z.string().optional(),
  isDeleted: z.boolean().optional(),
});

export const toggleTaskSchema = z.object({
  completed: z.boolean(),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
export type ToggleTaskInput = z.infer<typeof toggleTaskSchema>;
