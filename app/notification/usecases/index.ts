import {
  findNotificationToken,
  insertNotification,
  insertNotificationToken,
  fetchSendOtpBySmsir,
  fetchSmsirToken,
} from "../adapters";

import { buildRetrieveSmsirToken } from "./retrieveSmsirToken";
import { buildSendOtpBySms } from "./sendOtpBySms";

export const retrieveSmsirToken = buildRetrieveSmsirToken({
  fetchSmsirToken,
  findNotificationToken,
  insertNotificationToken,
});

export const sendOtpBySms = buildSendOtpBySms({
  fetchSendOtpBySmsir,
  insertNotification,
  retrieveSmsirToken,
});
