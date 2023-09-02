import { TSchedulePayload } from "../interfaces";
import { scheduleRepo } from "../repositories";

const create = async (payload: TSchedulePayload) => {
  const newSchedule = scheduleRepo.create(payload);

  await scheduleRepo.save(newSchedule);

  return newSchedule;
};

export default { create };
