import { Request, Response } from "express";
import { categoryServices } from "../services";
import { TCategory, TCategoryRead } from "../interfaces/category.interface";

const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCategory = await categoryServices.create(req.body);

  return res.status(201).json(newCategory);
};

const readCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: TCategoryRead = await categoryServices.read();

  return res.status(200).json(categories);
};

const retrieveCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json(res.locals.category);
};

export {
  createCategoryController,
  readCategoryController,
  retrieveCategoryController,
};
