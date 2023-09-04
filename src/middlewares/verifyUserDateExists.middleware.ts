import { NextFunction, Request, Response } from "express";
import { scheduleRepo, userRepo } from "../repositories";
import { AppError } from "../errors";
import { Schedule, User } from "../entities";

export default async (req: Request, res: Response, next: NextFunction) => {
  const {
    decoded: { sub: userId },
    realEstateId,
  } = res.locals;

  const user = await userRepo.findOne({ where: { id: Number(userId) } });

  // const userDates = 

  // console.log(userDates);

  // res.locals = { ...res.locals, user };

  return next();
};
