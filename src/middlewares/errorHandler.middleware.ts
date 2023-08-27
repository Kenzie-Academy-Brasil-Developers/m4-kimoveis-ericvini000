import { defaultMaxListeners } from "events";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { AppError } from "../errors";

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (err instanceof z.ZodError) {
    return res.status(400).json({ message: err.flatten().fieldErrors });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: "Internal Server Error" });
};
