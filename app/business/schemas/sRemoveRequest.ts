import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("payload", fluentSchema.string().required()),
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
};

export const sRemoveRequest = {
  response,
};