import { TSchedule, TSchedulePayload } from "../interfaces";
import { scheduleRepo } from "../repositories";

const create = async (payload: TSchedulePayload): Promise<TSchedule> => {
  const newSchedule = scheduleRepo.create(payload);

  await scheduleRepo.save(newSchedule);

  return newSchedule;
};

export default { create };
