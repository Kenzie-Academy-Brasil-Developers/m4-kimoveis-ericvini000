import { TRealEstate, TRealEstateCreate } from "../interfaces";
import { realEstateRepo } from "../repositories";

const create = async (payload: TRealEstateCreate) => {
  const newRealEstate = realEstateRepo.create(payload);

  await realEstateRepo.save(newRealEstate);

  return newRealEstate;
};

const read = async () => {};

export default { create, read };
