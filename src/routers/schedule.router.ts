import { Router } from "express";
import {
  createScheduleController,
  retrieveScheduleController,
} from "../controllers";
import middlewares from "../middlewares";
import { scheduleSchemaCreate } from "../schemas";

const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  middlewares.authenticateToken,
  middlewares.validateBody(scheduleSchemaCreate),
  middlewares.verifyRealEstateId,
  middlewares.verifyRealEstateDateExists,
  middlewares.verifyUserDateExists,
  middlewares.verifyUserHourExists,
  middlewares.verifyCommercialHour,
  middlewares.verifyCommercialDay,
  createScheduleController
);

scheduleRouter.get(
  "/realEstate/:id",
  middlewares.authenticateToken,
  middlewares.verifyIsAdmin,
  middlewares.verifyRealEstates,
  retrieveScheduleController
);

export default scheduleRouter;
