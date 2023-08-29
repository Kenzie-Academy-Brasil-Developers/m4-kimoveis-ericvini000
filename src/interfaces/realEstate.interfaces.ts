import { z } from "zod";
import {
  realEstateSchema,
  realEstateSchemaCreate,
  realEstateSchemaRead,
} from "../schemas";

type TRealEstate = z.infer<typeof realEstateSchema>;

type TRealEstateCreate = z.infer<typeof realEstateSchemaCreate>;

type TRealEstateRead = z.infer<typeof realEstateSchemaRead>;

export { TRealEstate, TRealEstateCreate, TRealEstateRead };
