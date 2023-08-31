import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import { verify } from "jsonwebtoken";

export default (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const bearerToken: string | undefined = req.headers.authorization!;
  
  if (!bearerToken) throw new AppError("Missing bearer token", 401);

  const token: string = bearerToken.split(" ")[1];

  if (!token) throw new AppError("Missing bearer token", 401);

  verify(token, process.env.SECRET_KEY!, (err, decoded) => {
    if (err) throw new AppError(err.message, 401);
    res.locals.decoded = decoded;
  });

  return next();
};
