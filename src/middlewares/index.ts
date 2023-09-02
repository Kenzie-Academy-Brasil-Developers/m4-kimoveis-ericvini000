import errorHandler from "./errorHandler.middleware";
import validateBody from "./validateBody.middleware";
import verifyUserIdExists from "./verifyUserIdExists.middleware";
import verifyEmailExists from "./verifyEmailExists.middleware";
import authenticateToken from "./authenticateToken.middleware";
import verifyIsAdmin from "./verifyIsAdmin.middleware";
import verifyUserPermission from "./verifyUserPermission.middleware";
import verifyCategoryName from "./verifyCategoryName.middleware";
import verifyRealEstateId from "./verifyRealEstateId.middleware";
import verifyCategoryIdExists from "./verifyCategoryIdExists.middleware";
import verifyUserHourExists from "./verifyUserHourExists.middleware";
import verifyAddressExists from "./verifyAddressExists.middleware";

export default {
  errorHandler,
  validateBody,
  verifyUserIdExists,
  verifyEmailExists,
  authenticateToken,
  verifyIsAdmin,
  verifyUserPermission,
  verifyCategoryName,
  verifyRealEstateId,
  verifyCategoryIdExists,
  verifyUserHourExists,
  verifyAddressExists,
};
