import { z } from "zod";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string().or(z.date()),
  hour: z.string().or(z.date()),
  realEstateId: z.number().positive(),
  userId: z.number().positive(),
});

const scheduleSchemaRead = scheduleSchema.array();

export { scheduleSchema, scheduleSchemaRead };
