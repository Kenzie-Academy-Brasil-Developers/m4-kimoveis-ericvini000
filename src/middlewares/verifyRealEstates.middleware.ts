import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { realEstateRepo } from "../repositories";
import { RealEstate } from "../entities";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const realEstateId: number = Number(req.params.id);

  const realEstates: RealEstate | null = await realEstateRepo.findOne({
    where: { id: realEstateId },
    relations: { address: true, category: true, schedules: { user: true } },
  });

  if (!realEstates) throw new AppError("RealEstate not found", 404);

  res.locals = { ...res.locals, realEstateId, realEstates };

  return next();
};
