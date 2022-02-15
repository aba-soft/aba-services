import { entityTypes } from "../types";

export function buildMakeRole() {
  return function makeRole(
    role: entityTypes.IRole
  ): Readonly<entityTypes.IMadeRole> {
    const { otpId, createdAt = new Date(), modifiedAt = new Date() } = role;
    let {
      admin = false,
      provider = false,
      assistant = false,
      customer = true,
      support = false,
      accountant = false,
      adminAL = 0,
      providerAL = 0,
      assistantAL = 0,
      customerAL = 0,
      supportAL = 0,
      accountantAL = 0,
    } = role;
    // Getters
    function getRole(): entityTypes.tRole {
      if (admin) {
        return "admin";
      }
      if (provider) {
        return "provider";
      }
      if (assistant) {
        return "assistant";
      }
      if (accountant) {
        return "accountant";
      }
      if (support) {
        return "support";
      }
      if (customer) {
        return "customer";
      }
      return "customer";
    }

    // Setters
    function setAdmin(isAdmin: boolean) {
      admin = isAdmin;
      modifiedAt.setTime(Date.now());
    }
    function setProvider(isProvider: boolean) {
      provider = isProvider;
      modifiedAt.setTime(Date.now());
    }
    function setAssistant(isAssistant: boolean) {
      assistant = isAssistant;
      modifiedAt.setTime(Date.now());
    }
    function setCustomer(isCustomer: boolean) {
      customer = isCustomer;
      modifiedAt.setTime(Date.now());
    }
    function setSupport(isSupport: boolean) {
      support = isSupport;
      modifiedAt.setTime(Date.now());
    }
    function setAccountant(isAccountant: boolean) {
      accountant = isAccountant;
      modifiedAt.setTime(Date.now());
    }
    function setAdminAL(newAccessLevel: number) {
      adminAL = newAccessLevel;
      modifiedAt.setTime(Date.now());
    }
    function setProviderAL(newAccessLevel: number) {
      providerAL = newAccessLevel;
      modifiedAt.setTime(Date.now());
    }
    function setAssistantAL(newAccessLevel: number) {
      assistantAL = newAccessLevel;
      modifiedAt.setTime(Date.now());
    }
    function setCustomerAL(newAccessLevel: number) {
      customerAL = newAccessLevel;
      modifiedAt.setTime(Date.now());
    }
    function setSupportAL(newAccessLevel: number) {
      supportAL = newAccessLevel;
      modifiedAt.setTime(Date.now());
    }
    function setAccountantAL(newAccessLevel: number) {
      accountantAL = newAccessLevel;
      modifiedAt.setTime(Date.now());
    }

    const madeRole: Readonly<entityTypes.IMadeRole> = {
      get: {
        otpId: () => otpId,
        admin: () => admin,
        provider: () => provider,
        assistant: () => assistant,
        customer: () => customer,
        support: () => support,
        accountant: () => accountant,
        adminAL: () => adminAL,
        providerAL: () => providerAL,
        assistantAL: () => assistantAL,
        customerAL: () => customerAL,
        supportAL: () => supportAL,
        accountantAL: () => accountantAL,
        role: getRole,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
      },
      set: {
        admin: setAdmin,
        provider: setProvider,
        assistant: setAssistant,
        customer: setCustomer,
        support: setSupport,
        accountant: setAccountant,
        adminAL: setAdminAL,
        providerAL: setProviderAL,
        assistantAL: setAssistantAL,
        customerAL: setCustomerAL,
        supportAL: setSupportAL,
        accountantAL: setAccountantAL,
      },
      object: () => {
        return {
          otpId,
          admin,
          provider,
          assistant,
          customer,
          support,
          accountant,
          adminAL,
          providerAL,
          assistantAL,
          customerAL,
          supportAL,
          accountantAL,
          createdAt,
          modifiedAt,
        };
      },
    };
    return madeRole;
  };
}
