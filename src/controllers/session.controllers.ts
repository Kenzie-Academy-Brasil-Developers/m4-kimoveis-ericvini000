import { Request, Response } from "express";
import { sessionServices } from "../services";

const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: string = await sessionServices.create(req.body);

  return res.status(200).json({ token });
};

export { loginController };
