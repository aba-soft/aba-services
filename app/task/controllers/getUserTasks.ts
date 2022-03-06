import { auth, types, httpResult, nullToUndefined } from "aba-node";
import { retrieveTasksByUserId } from "../usecases";
import { controllerTypes } from "../types";
export function buildGetUserTasks(args: controllerTypes.IBuildGetUserTasks) {
  const { fetchCustomerProvider } = args;
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden,   } = httpResult.clientError;
  return async function getUserTasks(
    httpRequest: controllerTypes.tGetUserTasks
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }

    const userId = nullToUndefined(httpRequest.params.userId);
    const { role } = payload;
    if (role === "admin") {
      if (!userId) {
        return badRequest({ error: "user id must be defined" });
      }
      const userProviderId = await fetchCustomerProvider(userId);
      if(!userProviderId) {
        return forbidden({ error: "provider not found" });
      }
      return await retrieveTasksByUserId({userId, providerId: userProviderId});
    }
    if (role === "provider") {
      const providerId = payload.userId;
      if (!userId) {
        return badRequest({ error: "user id must be defined" });
      }
      const userProviderId = await fetchCustomerProvider(userId);
      if (!userProviderId || userProviderId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }
      return await retrieveTasksByUserId({userId, providerId: userProviderId});
    }
    const userProviderId = await fetchCustomerProvider(payload.userId);
    if(!userProviderId) {
      return forbidden({ error: "you should have provider" });
    }
    return await retrieveTasksByUserId({userId: payload.userId, providerId: userProviderId});
  };
}
