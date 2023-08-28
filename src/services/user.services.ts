import {
  TUser,
  TUserCreate,
  TUserRead,
  TUserReturn,
  TUserUpdate,
} from "../interfaces";
import { userRepository } from "../repositories";
import { userSchemaRead, userSchemaReturn } from "../schemas";

const create = async (payload: TUserCreate): Promise<TUserReturn> => {
  const userCreated: TUserReturn = userRepository.create(payload);

  await userRepository.save(userCreated);

  return userSchemaReturn.parse(userCreated);
};

const read = async (): Promise<TUserRead> => {
  const userList: TUserRead = await userRepository.find();

  return userSchemaRead.parse(userList);
};

const update = async (
  user: TUser,
  payload: TUserUpdate
): Promise<TUserReturn> => {
  const userUpdated = await userRepository.save({ ...user, ...payload });
  
  return userSchemaReturn.parse(userUpdated);
};

const destroy = async (user: TUser): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, update, destroy };
