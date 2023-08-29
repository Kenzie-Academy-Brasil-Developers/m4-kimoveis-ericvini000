import { z } from "zod";
import {
  scheduleSchema,
  scheduleSchemaCreate,
  scheduleSchemaRead,
} from "../schemas";

type TSchedule = z.infer<typeof scheduleSchema>;

type TScheduleCreate = z.infer<typeof scheduleSchemaCreate>;

type TScheduleRead = z.infer<typeof scheduleSchemaRead>;

export { TSchedule, TScheduleCreate, TScheduleRead };
