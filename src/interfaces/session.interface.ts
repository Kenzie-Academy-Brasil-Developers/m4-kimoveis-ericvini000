import { z } from "zod";
import { sessionSchema } from "../schemas";

export type TSession = z.infer<typeof sessionSchema>;
