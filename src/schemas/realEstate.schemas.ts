import { z } from "zod";
import { addressSchema, addressSchemaCreate } from "./address.schemas";
import { categorySchema, categorySchemaCreate } from "./category.schemas";

const realEstateSchema = z.object({
  id: z.number().positive(),
  value: z
    .number()
    .or(z.string())
    .default(() => 0),
  size: z.number().positive(),
  address: addressSchema,
  category: categorySchema,
  sold: z.boolean().default(() => false),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

const realEstateSchemaCreate = realEstateSchema
  .omit({
    id: true,
    sold: true,
    updatedAt: true,
    createdAt: true,
  })
  .extend({
    address: addressSchemaCreate,
    category: categorySchemaCreate,
  });

const realEstateSchemaRead = realEstateSchema.array();

export { realEstateSchema, realEstateSchemaCreate, realEstateSchemaRead };
