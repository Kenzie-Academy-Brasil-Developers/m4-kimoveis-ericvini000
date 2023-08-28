import { z } from "zod";
import {
  userSchema,
  userSchemaCreate,
  userSchemaRead,
  userSchemaReturn,
  userSchemaUpdate,
} from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

export type TUser = z.infer<typeof userSchema>;

export type TUserCreate = z.infer<typeof userSchemaCreate>;

export type TUserUpdate = DeepPartial<typeof userSchemaUpdate>;

export type TUserReturn = z.infer<typeof userSchemaReturn>;

export type TUserRead = z.infer<typeof userSchemaRead>;
