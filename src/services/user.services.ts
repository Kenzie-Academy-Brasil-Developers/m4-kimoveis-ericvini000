import { hash } from "bcryptjs";
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
  console.log(new Date());

  await userRepository.save(userCreated);

  return userSchemaReturn.parse(userCreated);
};

const read = async (): Promise<TUserRead> => {
  const userList: TUserRead = await userRepository.find();

  return userSchemaRead.parse(userList);
};

const update = async (user: TUser, payload: TUserUpdate): Promise<TUser> => {
  return await userRepository.save({ ...user, ...payload });
};

const destroy = async (user: TUser): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, update, destroy };
