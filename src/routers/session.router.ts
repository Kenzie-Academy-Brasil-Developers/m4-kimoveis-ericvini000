import { Router } from "express";
import { loginController } from "../controllers";


const sessionRouter: Router = Router();

sessionRouter.post("", loginController)

export default sessionRouter;