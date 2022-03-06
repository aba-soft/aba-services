import { types, auth } from "aba-node"
import { removeCustomer } from "../usecases";
import type { controllerTypes } from "../types";

export function buildDeleteCustomer() {
  const roles: types.IRoles = {
    customer: false,
    provider: true,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  }
  return async function deleteCustomer(
    httpRequest: controllerTypes.tDeleteCustomer
  ) {
    const {success, error, payload} = auth(httpRequest, roles);
    if(!success) {
      return error;
    }
    const { userId } = payload;
    const { customerId } = httpRequest.params;
    return await removeCustomer({
      customerId,
      providerId: userId,
    });
  };
}
