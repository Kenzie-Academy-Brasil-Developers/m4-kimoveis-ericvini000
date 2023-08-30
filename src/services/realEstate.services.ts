import { TRealEstateCreate } from "../interfaces";
import { addressRepo, realEstateRepo } from "../repositories";

const create = async (payload: any) => {
  const newRealEstate = realEstateRepo.create(payload);

  await addressRepo.save(payload.address);
  await realEstateRepo.save(newRealEstate);

  return newRealEstate;
};

const read = async () => {
  return await realEstateRepo.find({
    relations: { schedule: true, category: true, address: true },
  });
};

export default { create, read };
