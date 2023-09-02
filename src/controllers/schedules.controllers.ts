import { Request, Response } from "express";
import { scheduleServices } from "../services";
import { TSchedulePayload, TUser } from "../interfaces";
import { userRepo } from "../repositories";
import { AppError } from "../errors";

const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const {
    decoded: { sub },
    realEstate,
    user,
  } = res.locals;

  await scheduleServices.create({ ...req.body, user, realEstate });

  return res.status(201).json({ message: "Schedule created" });
};

const retrieveScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json(res.locals.realEstate);
};

export { createScheduleController, retrieveScheduleController };
