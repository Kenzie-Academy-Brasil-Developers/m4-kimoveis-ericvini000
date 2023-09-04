import { NextFunction, Request, Response } from "express";
import { categoryRepo } from "../repositories";
import { AppError } from "../errors";
import { TCategory } from "../interfaces";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const categoryId: number = Number(req.params.id);

  const category: TCategory | null = await categoryRepo.findOne({
    where: { id: categoryId },
    relations: { realEstate: true },
  });

  if (!category) throw new AppError("Category not found", 404);

  res.locals.category = category;

  return next();
};
