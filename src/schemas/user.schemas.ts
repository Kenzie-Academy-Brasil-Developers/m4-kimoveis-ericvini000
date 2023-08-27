import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});

const userSchemaCreate = userSchema.omit({ id: true });

const userSchemaUpdate = userSchemaCreate.partial();

const userSchemaReturn = userSchema.omit({ password: true });

const userSchemaRead = userSchemaReturn.array();

export {
  userSchema,
  userSchemaCreate,
  userSchemaRead,
  userSchemaReturn,
  userSchemaUpdate,
};
