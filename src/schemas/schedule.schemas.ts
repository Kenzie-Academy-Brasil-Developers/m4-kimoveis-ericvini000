import { z } from "zod";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string().max(10),
  hour: z.string().max(5),
  realEstateId: z.number().positive(),
  userId: z.number().positive(),
});

const scheduleSchemaPayload = scheduleSchema.omit({
  id: true,
  userId: true,
  realEstateId: true,
});

const scheduleSchemaCreate = scheduleSchema.omit({id: true})

const scheduleSchemaRead = scheduleSchema.array();

export { scheduleSchema, scheduleSchemaRead, scheduleSchemaCreate, scheduleSchemaPayload };
