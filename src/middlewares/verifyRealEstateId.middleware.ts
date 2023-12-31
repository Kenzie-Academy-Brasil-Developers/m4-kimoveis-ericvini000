import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { realEstateRepo } from "../repositories";
import { RealEstate } from "../entities";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const realEstateId: number = Number(req.body.realEstateId);

  const realEstate: RealEstate | null = await realEstateRepo.findOne({
    where: { id: realEstateId },
    relations: { address: true },
  });

  if (!realEstate) throw new AppError("RealEstate not found", 404);

  res.locals = { ...res.locals, realEstateId, realEstate };

  return next();
};
