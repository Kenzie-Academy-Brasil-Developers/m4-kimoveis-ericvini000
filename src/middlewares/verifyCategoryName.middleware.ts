import { NextFunction, Request, Response } from "express";
import { categoryRepository } from "../repositories";
import { AppError } from "../errors";


export default async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { name } = req.body;
  
    const nameExists = await categoryRepository.findOneBy({ name });
  
    if (nameExists) throw new AppError("Name already exists.", 409);
  
    return next();
  };