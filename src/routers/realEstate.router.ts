import { Router } from "express";
import {
  createRealEstateController,
  readRealEstateController,
} from "../controllers";
import middlewares from "../middlewares";
import { realEstateSchemaCreate } from "../schemas";

const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  middlewares.authenticateToken,
  middlewares.verifyIsAdmin,
  middlewares.validateBody(realEstateSchemaCreate),
  middlewares.verifyAddressExists,
  createRealEstateController
);

realEstateRouter.get("", readRealEstateController);

export default realEstateRouter;
