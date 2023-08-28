import errorHandler from "./errorHandler.middleware";
import validateBody from "./validateBody.middleware";
import verifyUserIdExists from "./verifyUserIdExists.middleware";
import verifyEmailExists from "./verifyEmailExists.middleware";
import userAlreadyDeleted from './userAlreadyDeleted.middleware';

export default {
  errorHandler,
  validateBody,
  verifyUserIdExists,
  verifyEmailExists,
  userAlreadyDeleted
};
