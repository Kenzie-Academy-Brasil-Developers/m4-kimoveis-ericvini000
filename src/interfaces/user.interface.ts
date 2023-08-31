import { z } from "zod";
import {
  userSchema,
  userSchemaCreate,
  userSchemaRead,
  userSchemaReturn,
  userSchemaUpdateReturn,
  userSchemaUpdatePayload,
  adminSchemaUpdateReturn,
} from "../schemas";
import { DeepPartial } from "typeorm";

export type TUser = z.infer<typeof userSchema>;

export type TUserCreate = z.infer<typeof userSchemaCreate>;

export type TUserUpdatePayload = DeepPartial<typeof userSchemaUpdatePayload>;

export type TUserUpdateReturn = z.infer<typeof userSchemaUpdateReturn>;

export type TAdminUpdateReturn = z.infer<typeof adminSchemaUpdateReturn>;

export type TUserReturn = z.infer<typeof userSchemaReturn>;

export type TUserRead = z.infer<typeof userSchemaRead>;
