import { Category } from "../entities";
import { TRealEstate, TRealEstateCreate, TRealEstateRead } from "../interfaces";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

const create = async ({
  address,
  categoryId,
  ...payload
}: TRealEstateCreate): Promise<TRealEstate> => {
  const newAddress = addressRepo.create(address);
  await addressRepo.save(newAddress);

  const categoryFound: Category | null = await categoryRepo.findOneBy({
    id: categoryId,
  });

  const newRealEstate: TRealEstate = realEstateRepo.create({
    address: newAddress,
    category: categoryFound!,
    ...payload,
  });

  await realEstateRepo.save(newRealEstate);

  return newRealEstate;
};

const read = async (): Promise<TRealEstateRead> => {
  return await realEstateRepo.find({
    relations: { address: true },
  });
};

export default { create, read };
