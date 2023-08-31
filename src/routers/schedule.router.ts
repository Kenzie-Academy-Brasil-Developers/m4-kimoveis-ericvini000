import { Router } from "express";
import {
  createScheduleController,
  retrieveScheduleController,
} from "../controllers";
import middlewares from "../middlewares";

const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  middlewares.authenticateToken,
  middlewares.verifyRealEstateId,
  createScheduleController
);

scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyRealEstateId,
  retrieveScheduleController
);

export default scheduleRouter;
