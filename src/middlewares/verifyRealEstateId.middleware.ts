import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { realEstateRepo } from "../repositories";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const realEstateId: number = parseInt(req.params.id);

  const realEstate: any = await realEstateRepo.findOneBy({ id: realEstateId });

  if (!realEstate) throw new AppError("Estate not found.", 404);

  res.locals = { ...res.locals, realEstateId };

  return next();
};
