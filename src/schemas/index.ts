import {
  userSchema,
  userSchemaCreate,
  userSchemaRead,
  userSchemaReturn,
  userSchemaUpdateReturn,
  userSchemaUpdatePayload,
} from "./user.schemas";
import sessionSchema from "./session.schemas";
import {
  categorySchema,
  categorySchemaCreate,
  categorySchemaRead,
} from "./category.schemas";
import {
  realEstateSchema,
  realEstateSchemaCreate,
  realEstateSchemaRead,
} from "./realEstate.schemas";
import {
  scheduleSchema,
  scheduleSchemaCreate,
  scheduleSchemaRead,
  scheduleSchemaPayload,
} from "./schedule.schemas";
import { addressSchema, addressSchemaCreate } from "./address.schemas";

export {
  userSchema,
  userSchemaCreate,
  userSchemaRead,
  userSchemaReturn,
  userSchemaUpdateReturn,
  userSchemaUpdatePayload,
  sessionSchema,
  categorySchema,
  categorySchemaCreate,
  categorySchemaRead,
  realEstateSchema,
  realEstateSchemaCreate,
  realEstateSchemaRead,
  scheduleSchema,
  scheduleSchemaRead,
  addressSchema,
  addressSchemaCreate,
  scheduleSchemaCreate,
  scheduleSchemaPayload,
};
