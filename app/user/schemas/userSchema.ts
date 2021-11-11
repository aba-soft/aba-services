import { fluentSchema } from "aba-node";

export const user = fluentSchema
  .object()
  .prop("id", fluentSchema.string().format("uuid").required())
  .prop("role", fluentSchema.string().required())
  .prop("username", fluentSchema.string().default(""))
  .prop("firstName", fluentSchema.string().default(""))
  .prop("lastName", fluentSchema.string().default(""))
  .prop("profilePictureUrl", fluentSchema.string().default(""))
  .prop("address", fluentSchema.string().default(""))
  .prop("telephone", fluentSchema.string().default(""))
  .prop("gender", fluentSchema.enum(["male", "female"]).default(""))
  .prop("createdAt", fluentSchema.string().format("date").required())
  .prop("modifiedAt", fluentSchema.string().format("date").required());

export const userSchema = fluentSchema.object().prop("payload", user);