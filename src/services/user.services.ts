import {
  TUser,
  TUserCreate,
  TUserRead,
  TUserReturn,
  TUserUpdate,
} from "../interfaces";
import { userRepo } from "../repositories";
import { userSchemaRead, userSchemaReturn } from "../schemas";

const create = async (payload: TUserCreate): Promise<TUserReturn> => {
  const userCreated: TUserReturn = userRepo.create(payload);

  await userRepo.save(userCreated);

  return userSchemaReturn.parse(userCreated);
};

const read = async (): Promise<TUserRead> => {
  const userList: TUserRead = await userRepo.find();

  return userSchemaRead.parse(userList);
};

const update = async (
  user: TUser,
  payload: TUserUpdate
): Promise<TUserReturn> => {
  const userUpdated = await userRepo.save({ ...user, ...payload });

  return userSchemaReturn.parse(userUpdated);
};

const destroy = async (user: TUser): Promise<void> => {
  await userRepo.softRemove(user);
};

export default { create, read, update, destroy };
