import { Request, Response } from "express";
import { realEstateServices } from "../services";

const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newRealEstate = await realEstateServices.create(req.body);

  return res.status(201).json(newRealEstate);
};
const readRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const estates = await realEstateServices.read();

  return res.status(200).json(estates);
};

export { createRealEstateController, readRealEstateController };
