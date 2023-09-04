import { NextFunction, Request, Response } from "express";
import { addressRepo, categoryRepo } from "../repositories";
import { AppError } from "../errors";
import { Address } from "../entities";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { street, zipCode, number, city, state } = req.body.address;

  const addressExists: boolean = await addressRepo.exist({
    where: { street, zipCode, number, city, state },
  });

  if (addressExists) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};
