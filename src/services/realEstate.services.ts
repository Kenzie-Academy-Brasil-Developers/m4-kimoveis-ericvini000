import { Category } from "../entities";
import { AppError } from "../errors";
import { TRealEstate, TRealEstateCreate } from "../interfaces";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

const create = async ({
  address,
  category,
  ...payload
}: TRealEstateCreate): Promise<TRealEstate> => {
  const newAddress = addressRepo.create(address);
  await addressRepo.save(newAddress);

  const categoryFound: Category | null = await categoryRepo.findOne({
    where: { name: category.name },
  });

  if (!categoryFound) {
    throw new AppError("Category not found", 404);
  }

  const newRealEstate: TRealEstate = realEstateRepo.create({
    address: newAddress,
    category: categoryFound,
    ...payload,
  });

  await realEstateRepo.save(newRealEstate);

  return newRealEstate;
};

const read = async () => {
  return await realEstateRepo.find({
    relations: { address: true },
  });
};

export default { create, read };
