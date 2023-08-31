import { TCategory, TCategoryCreate } from "../interfaces";
import { TCategoryRead } from "../interfaces/category.interface";
import { categoryRepo } from "../repositories";

const create = async (payload: TCategoryCreate): Promise<TCategory> => {
  const categoryCreated: TCategory = categoryRepo.create(payload);

  await categoryRepo.save(categoryCreated);

  return categoryCreated;
};

const read = async (): Promise<TCategoryRead> => {
  return await categoryRepo.find();
};

export default { create, read };
