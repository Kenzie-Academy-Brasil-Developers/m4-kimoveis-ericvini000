import { scheduleRepo } from "../repositories";

const create = async (payload: any, userId: number, realEstateId: number) => {
  const newSchedule = scheduleRepo.create({ ...payload, userId, realEstateId });

  await scheduleRepo.save(newSchedule);

  return newSchedule;
};

const retrieve = (id: number) => {};

export default { create, retrieve };
