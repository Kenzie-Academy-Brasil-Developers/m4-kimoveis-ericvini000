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
  middlewares.validateBody(scheduleSchemaCreate),
  middlewares.authenticateToken,
  middlewares.verifyRealEstateId,
  middlewares.verifyUserHourExists,
  createScheduleController
);

scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyRealEstateId,
  retrieveScheduleController
);

export default scheduleRouter;
