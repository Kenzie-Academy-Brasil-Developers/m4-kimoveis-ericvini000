import { Request, Response } from "express";
import { scheduleServices } from "../services";

const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const {
    decoded: { sub },
    realEstate,
  } = res.locals;

  const newSchedule = await scheduleServices.create(
    req.body,
    Number(sub),
    realEstate
  );

  return res.status(201).json(newSchedule);
};

const retrieveScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json(res.locals.realEstate);
};

export { createScheduleController, retrieveScheduleController };
