import { Request, Response } from "express";
import { scheduleServices } from "../services";

const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { decoded, realEstateId } = res.locals;
  console.log(decoded)

  // const newSchedule = await scheduleServices.create(
  //   req.body,
  //   userId,
  //   realEstateId
  // );

  return res.status(201).json();
};

const retrieveScheduleController = async (req: Request, res: Response) => {};

export { createScheduleController, retrieveScheduleController };
