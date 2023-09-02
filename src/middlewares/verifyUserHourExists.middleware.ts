import { NextFunction, Request, Response } from "express";
import { scheduleRepo, userRepo } from "../repositories";
import { AppError } from "../errors";

export default async (req: Request, res: Response, next: NextFunction) => {
  const {
    decoded: { sub: userId },
    realEstateId,
  } = res.locals;

  const user = await userRepo.findOneBy({ id: Number(userId) });

  if (user?.deletedAt) throw new AppError("User not found", 404);

  //   const schedule = await scheduleRepo.findOneBy({ user: userId });

  //   console.log(schedule)

  res.locals = { ...res.locals, user };

  return next();
};
