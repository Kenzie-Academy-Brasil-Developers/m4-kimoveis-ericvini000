import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
});

const userSchemaCreate = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userSchemaReturn = userSchema.omit({ password: true });

const adminSchemaUpdateReturn = userSchema.omit({
  password: true,
});

const userSchemaUpdateReturn = adminSchemaUpdateReturn.omit({
  admin: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userSchemaUpdatePayload = userSchemaCreate
  .omit({ admin: true })
  .partial();

const userSchemaRead = userSchemaReturn.array();

export {
  userSchema,
  userSchemaCreate,
  userSchemaRead,
  userSchemaReturn,
  userSchemaUpdateReturn,
  userSchemaUpdatePayload,
  adminSchemaUpdateReturn,
};
