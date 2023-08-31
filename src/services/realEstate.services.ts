import { addressRepo, realEstateRepo } from "../repositories";

const create = async ({ address, ...payload }: any) => {
  const newAddress = addressRepo.create(address);
  await addressRepo.save(newAddress);

  const newRealEstate = realEstateRepo.create({
    address: newAddress,
    ...payload,
  });

  await realEstateRepo.save(newRealEstate);

  return newRealEstate;
};

const read = async () => {
  return await realEstateRepo.find({
    relations: { schedule: true, category: true, address: true },
  });
};

export default { create, read };
