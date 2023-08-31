import { RealEstate } from "../entities";
import { TScheduleCreate, TSchedulePayload } from "../interfaces";
import { scheduleRepo } from "../repositories";

const create = async (payload: TSchedulePayload, userId: any, realEstateId: RealEstate) => {
  console.log(payload);
  console.log(userId);
  console.log(realEstateId);

  const newSchedule = scheduleRepo.create({ ...payload, user: userId, realEstate: realEstateId });
  console.log(newSchedule);

  await scheduleRepo.save(newSchedule);

  return newSchedule;
};

export default { create,  };
