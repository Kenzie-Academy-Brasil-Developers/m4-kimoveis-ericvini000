import { Router } from "express";
import middlewares from "../middlewares";
import { userSchemaCreate } from "../schemas";

const userRouter: Router = Router();

userRouter.post("", middlewares.validateBody(userSchemaCreate));

userRouter.get("");

export default userRouter;
