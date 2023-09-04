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
  middlewares.verifyUserHourExists,
  middlewares.verifyCommercialDay,
  middlewares.verifyCommercialHour,
  // createScheduleController
);

scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyRealEstateId,
  retrieveScheduleController
);

export default scheduleRouter;
