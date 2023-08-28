import { Router } from "express";
import middlewares from "../middlewares";
import { userSchemaCreate } from "../schemas";
import {
  createUserController,
  deleteUserController,
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

userRouter.get("", readUsersController);

userRouter.patch(
  "/:id",
  middlewares.verifyUserIdExists,
  middlewares.verifyEmailExists,
  updateUserController
);

userRouter.delete("/:id", middlewares.verifyUserIdExists, deleteUserController);

export default userRouter;
