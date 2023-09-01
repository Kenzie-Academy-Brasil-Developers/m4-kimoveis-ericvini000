import { compare } from "bcryptjs";
import { AppError } from "../errors";
import { TSession, TUser } from "../interfaces";
import { userRepo } from "../repositories";
import { sign } from "jsonwebtoken";

const create = async (payload: TSession): Promise<string> => {
  const { email, password } = payload;

  const user: TUser | null = await userRepo.findOneBy({ email });
  
  if (!user) throw new AppError("Invalid credentials", 401);

  if(user.deletedAt) throw new AppError("User already deleted.", 404)

  const verifyPassword = await compare(password, user.password);

  if (!verifyPassword || user.email !== email) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { email: user.email, admin: user.admin },
    process.env.SECRET_KEY!,
    { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN }
  );

  return token;
};

export default { create };
