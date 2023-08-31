import { Router } from "express";
import middlewares from "../middlewares";
import { userSchemaCreate, userSchemaUpdatePayload } from "../schemas";
import {
  createUserController,
  destroyUserController,
  readUsersController,
  updateUserController,
} from "../controllers";

const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userSchemaCreate),
  middlewares.verifyEmailExists,
  createUserController
);

userRouter.get(
  "",
  middlewares.authenticateToken,
  middlewares.verifyIsAdmin,
  readUsersController
);

userRouter.patch(
  "/:id",
  middlewares.validateBody(userSchemaUpdatePayload),
  middlewares.authenticateToken,
  middlewares.verifyUserIdExists,
  middlewares.verifyEmailExists,
  middlewares.verifyUserPermission,
  updateUserController
);

userRouter.delete(
  "/:id",
  middlewares.authenticateToken,
  middlewares.verifyUserIdExists,
  middlewares.verifyIsAdmin,
  destroyUserController
);

export default userRouter;
