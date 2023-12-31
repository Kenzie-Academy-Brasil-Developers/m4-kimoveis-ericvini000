import { NextFunction, Request, Response } from "express";
import { scheduleRepo, userRepo } from "../repositories";
import { AppError } from "../errors";
import { Schedule, User } from "../entities";

export default async (req: Request, res: Response, next: NextFunction) => {
  const {
    decoded: { sub: userId },
  } = res.locals;

  const { date, hour } = req.body;

  const userSchedules = await scheduleRepo
    .createQueryBuilder("s")
    .where("s.userId = :userId", {
      userId,
    })
    .getMany();

  userSchedules.forEach((schedule) => {
    if (schedule.date == date && schedule.hour == hour) {
      throw new AppError(
        "User schedule to this real estate at this date and time already exists",
        409
      );
    }
  });

  return next();
};
