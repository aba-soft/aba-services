import { postConfirmRequest } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";
export async function confirmRequest(
  request: controllerTypes.tPostConfirmRequest,
  reply: types.tReply
) {
  try {
    const response = await postConfirmRequest(request);
    reply.status(response.code);
    return response;
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
