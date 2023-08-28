import { z } from "zod";
import { categorySchema, categorySchemaCreate } from "../schemas";

export type TCategory = z.infer<typeof categorySchema>;

export type TCategoryCreate = z.infer<typeof categorySchemaCreate>;
