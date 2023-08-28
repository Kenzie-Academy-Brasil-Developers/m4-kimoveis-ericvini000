import { Router } from "express";
import {
  createCategoryController,
  readCategoryController,
} from "../controllers";
import middlewares from "../middlewares";
import { categorySchemaCreate } from "../schemas";

const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  middlewares.authenticateToken,
  middlewares.verifyIsAdmin,
  middlewares.validateBody(categorySchemaCreate),
  middlewares.verifyCategoryName,
  createCategoryController
);

categoryRouter.get("", readCategoryController);

export default categoryRouter;
