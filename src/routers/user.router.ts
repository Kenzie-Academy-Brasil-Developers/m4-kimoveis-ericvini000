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
  createUserController
);

userRouter.get("", readUsersController);

userRouter.patch(
  "",
  middlewares.verifyUserIdExists,
  middlewares.verifyEmailExists,
  updateUserController
);

userRouter.delete("", middlewares.verifyUserIdExists, deleteUserController);

export default userRouter;
