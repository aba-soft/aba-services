import { retrieveUser } from "../../../user";
import { adaptersTypes } from "../../types";

export async function fetchUserById(
  userId: string
): Promise<adaptersTypes.IUser | undefined> {
  const { error, payload } = await retrieveUser(userId);
  if (error) {
    return undefined;
  }
  if (!payload) {
    return undefined;
  }
  const { id, lastName, firstName, profilePictureUrl, gender, telephone } =
    payload;
  const name = firstName ? `${firstName}${lastName ? " " + lastName : ""}` : "";
  return {
    id,
    name,
    description: `${gender} ${telephone}`,
    profilePictureUrl: profilePictureUrl ? profilePictureUrl : "",
  };
}
