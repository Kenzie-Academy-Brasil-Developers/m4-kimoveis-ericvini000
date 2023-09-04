import { z } from "zod";
import { realEstateSchema, userSchemaReturn } from "../schemas";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string().max(10),
  hour: z.string().max(5),
  realEstate: realEstateSchema,
  user: userSchemaReturn,
});

const scheduleSchemaPayload = scheduleSchema.omit({
  id: true,
});

const scheduleSchemaCreate = scheduleSchema
  .omit({ id: true, user: true, realEstate: true })
  .extend({ realEstateId: z.number().positive() });

const scheduleSchemaRead = scheduleSchema.array();

export {
  scheduleSchema,
  scheduleSchemaRead,
  scheduleSchemaCreate,
  scheduleSchemaPayload,
};
