import { NextFunction, Request, Response } from "express";
import { categoryRepo } from "../repositories";
import { AppError } from "../errors";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const categoryId = Number(req.params.id);

  const categories = await categoryRepo.findOne({
    where: { id: categoryId },
    relations: { realEstate: true },
  });

  if (!categories) throw new AppError("Category not exists.", 409);

  res.locals.categories = categories;

  return next();
};
