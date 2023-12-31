import { z } from "zod";
import {
  categorySchema,
  categorySchemaCreate,
  categorySchemaRead,
} from "../schemas";

export type TCategory = z.infer<typeof categorySchema>;

export type TCategoryCreate = z.infer<typeof categorySchemaCreate>;

export type TCategoryRead = z.infer<typeof categorySchemaRead>;
