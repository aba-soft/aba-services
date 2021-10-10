import { auth, types, httpResultClientError } from "aba-node";
import { taskUndone } from "../usecases";
import { controllerTypes } from "../types";
export function buildPostTaskUndone(
  args: controllerTypes.IBuildPostTaskUndone
) {
  const { findUserProvider } = args;
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    accountant: false,
    admin: true,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden } = httpResultClientError;
  return async function postTaskUndone(
    httpRequest: controllerTypes.tPostTaskUndone
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { taskId, userId } = httpRequest.body;
    const { role } = payload;
    if (role === "admin") {
      if (!userId) {
        return badRequest({ error: "user id must be defined" });
      }
      return await taskUndone({ taskId, userId });
    }
    if (role === "provider") {
      const providerId = payload.userId;
      if (!userId) {
        return badRequest({ error: "user id must be defined" });
      }
      const userProviderId = await findUserProvider(userId);
      if (!userProviderId || userProviderId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }
      return await taskUndone({ taskId, userId });
    }
    return await taskUndone({ taskId, userId: payload.userId });
  };
}