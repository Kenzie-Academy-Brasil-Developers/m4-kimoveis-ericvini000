import { TCategory, TCategoryCreate } from "../interfaces";
import { TCategoryRead } from "../interfaces/category.interface";
import { categoryRepository } from "../repositories";

const create = async (payload: TCategoryCreate): Promise<TCategory> => {
  const categoryCreated: TCategory = categoryRepository.create(payload);

  await categoryRepository.save(categoryCreated);

  return categoryCreated;
};

const read = async (): Promise<TCategoryRead> => {
  return await categoryRepository.find();
};

export default { create, read };
