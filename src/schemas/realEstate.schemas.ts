import { z } from "zod";
import { addressSchemaCreate } from "./address.schemas";

const realEstateSchema = z.object({
  id: z.number().positive(),
  value: z.number().or(z.string()).default(0),
  size: z.number(),
  address: addressSchemaCreate,
  categoryId: z.number(),
  sold: z.boolean().default(() => false),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

const realEstateSchemaCreate = realEstateSchema.omit({
  id: true,
  sold: true,
  updatedAt: true,
  createdAt: true,
});

const realEstateSchemaRead = realEstateSchema.array();

export { realEstateSchema, realEstateSchemaCreate, realEstateSchemaRead };
