import { Router } from "express";
import {
  createRealEstateController,
  readRealEstateController,
} from "../controllers";

const realEstateRouter: Router = Router();

realEstateRouter.post("", createRealEstateController);

realEstateRouter.get("", readRealEstateController);

export default realEstateRouter;
