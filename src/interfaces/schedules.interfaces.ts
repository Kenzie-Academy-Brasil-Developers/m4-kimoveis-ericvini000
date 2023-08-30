import { z } from "zod";
import {
  scheduleSchema,
  scheduleSchemaCreate,
  scheduleSchemaPayload,
  scheduleSchemaRead,
} from "../schemas";

type TSchedule = z.infer<typeof scheduleSchema>;

type TScheduleCreate = z.infer<typeof scheduleSchemaCreate>;

type TSchedulePayload = z.infer<typeof scheduleSchemaPayload>;

type TScheduleRead = z.infer<typeof scheduleSchemaRead>;

export { TSchedule, TScheduleCreate, TScheduleRead, TSchedulePayload };
