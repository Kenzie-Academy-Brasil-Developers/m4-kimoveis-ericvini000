import {
  TAdminUpdateReturn,
  TUser,
  TUserCreate,
  TUserRead,
  TUserReturn,
  TUserUpdatePayload,
  TUserUpdateReturn,
} from "../interfaces";
import { userRepo } from "../repositories";
import {
  adminSchemaUpdateReturn,
  userSchemaRead,
  userSchemaReturn,
  userSchemaUpdateReturn,
} from "../schemas";

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
  payload: TUserUpdatePayload,
  isAdmin: boolean
): Promise<TUserUpdateReturn | TAdminUpdateReturn> => {
  const userUpdated: TUser = await userRepo.save({
    ...user,
    ...payload,
  });

  if (isAdmin) {
    return adminSchemaUpdateReturn.parse(userUpdated);
  }

  return userSchemaUpdateReturn.parse(userUpdated);
};

const destroy = async (user: TUser): Promise<void> => {
  await userRepo.softRemove(user);
};

export default { create, read, update, destroy };
