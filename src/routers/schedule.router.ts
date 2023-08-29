import { Router } from "express";
import {
  createScheduleController,
  readCategoryController,
} from "../controllers";
import middlewares from "../middlewares";

const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  middlewares.authenticateToken,
  middlewares.verifyRealEstateId,
  createScheduleController
);

scheduleRouter.get("/realEstate/:id", readCategoryController);

export default scheduleRouter;
