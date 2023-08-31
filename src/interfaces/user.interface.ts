import { z } from "zod";
import {
  userSchema,
  userSchemaCreate,
  userSchemaRead,
  userSchemaReturn,
  userSchemaUpdateReturn,
  userSchemaUpdatePayload,
} from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

export type TUser = z.infer<typeof userSchema>;

export type TUserCreate = z.infer<typeof userSchemaCreate>;

export type TUserUpdatePayload = DeepPartial<typeof userSchemaUpdatePayload>;

export type TUserUpdateReturn = z.infer<typeof userSchemaUpdateReturn>;

export type TUserReturn = z.infer<typeof userSchemaReturn>;

export type TUserRead = z.infer<typeof userSchemaRead>;
