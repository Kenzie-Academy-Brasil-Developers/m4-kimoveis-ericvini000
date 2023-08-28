import { z } from "zod";

const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

const categorySchemaCreate = categorySchema.omit({ id: true });

const categorySchemaRead = categorySchema.array();

export { categorySchema, categorySchemaCreate, categorySchemaRead };
