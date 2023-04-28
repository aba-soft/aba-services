import { entityTypes } from "../types";

export function buildMakeUser(args: entityTypes.IBuildMakeUser) {
  const { nanoid } = args;

  return function makeUser(
    user: entityTypes.IUser
  ): Readonly<entityTypes.IMadeUser> {
    const {
      id,
      phoneNumber,
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = user;
    let {
      role,
      username,
      firstName,
      lastName,
      description,
      profilePictureUrl,
      address,
      gender,
      birthday,
      telephone,
      deactivationReason,
    } = user;
    if (!username) {
      username = nanoid(8);
    }
    function setRole(newRole: string) {
      role = newRole;
      modifiedAt.setTime(Date.now());
    }
    function setUsername(newUsername: string | undefined) {
      username = newUsername;
      modifiedAt.setTime(Date.now());
    }

    function setFirstName(newFirstName: string | undefined) {
      firstName = newFirstName;
      modifiedAt.setTime(Date.now());
    }
    function setLastName(newLastName: string | undefined) {
      lastName = newLastName;
      modifiedAt.setTime(Date.now());
    }
    function setDescription(newDesc: string | undefined) {
      description = newDesc;
      modifiedAt.setTime(Date.now());
    }
    function setProfilePictureUrl(newProfilePictureUrl: string | undefined) {
      profilePictureUrl = newProfilePictureUrl;
      modifiedAt.setTime(Date.now());
    }
    function setAddress(newAddress: string | undefined) {
      address = newAddress;
      modifiedAt.setTime(Date.now());
    }
    function setGender(newGender: "male" | "female" | undefined) {
      gender = newGender;
      modifiedAt.setTime(Date.now());
    }
    function setBirthday(date: Date | undefined) {
      birthday = date;
      modifiedAt.setTime(Date.now());
    }
    function setTelephone(newTel: string | undefined) {
      telephone = newTel;
      modifiedAt.setTime(Date.now());
    }
    function setDeactivationReason(newDeactivationReason: string) {
      deactivationReason = newDeactivationReason;
      modifiedAt.setTime(Date.now());
    }
    const madeUser: entityTypes.IMadeUser = {
      get: {
        id: () => id,
        role: () => role,
        username: () => username,
        phoneNumber: () => phoneNumber,
        firstName: () => firstName,
        lastName: () => lastName,
        description: () => description,
        gender: () => gender,
        birthday: () => birthday,
        profilePictureUrl: () => profilePictureUrl,
        address: () => address,
        telephone: () => telephone,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        deactivationReason: () => deactivationReason,
      },
      set: {
        role: setRole,
        username: setUsername,
        firstName: setFirstName,
        lastName: setLastName,
        description: setDescription,
        birthday: setBirthday,
        profilePictureUrl: setProfilePictureUrl,
        gender: setGender,
        address: setAddress,
        telephone: setTelephone,
        deactivationReason: setDeactivationReason,
      },
      object: () => {
        return {
          id,
          role,
          address,
          gender,
          birthday,
          telephone,
          username,
          phoneNumber,
          firstName,
          lastName,
          description,
          profilePictureUrl,
          deactivationReason,
          createdAt,
          modifiedAt,
        };
      },
    };
    return madeUser;
  };
}
