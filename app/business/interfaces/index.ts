import { types, routeGen } from "aba-node";

import { confirmRequest } from "./confirmRequest";
import { createRequest } from "./createRequest";
import { rejectRequest } from "./rejectRequest";
import { removeCustomer } from "./removeCustomer";
import { removeRequest } from "./removeRequest";
import { retrieveCustomers } from "./retrieveCustomers";
import { retrieveRequests } from "./retrieveRequests";
import { retrieveCustomerProviderInfo } from "./retrieveCustomerProviderInfo";
import { retrieveRequestByCustomerId } from "./retrieveRequestByCustomerId";
import {
  sConfirmSchema,
  sCreateRequest,
  sRejectRequest,
  sRemoveCustomer,
  sRetrieveCustomers,
  sRetrieveRequests,
  sRemoveRequest,
  sRetrieveCustomerProviderInfo,
  sRetrieveRequestByCustomerId,
} from "../schemas";
import { applicationVersion } from "../config";

export function startBusinessServer(app: types.tHttpInstance) {
  app.post(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["requests", "confirm"],
    }),
    { schema: sConfirmSchema },
    confirmRequest
  );
  app.post(
    routeGen({
      version: applicationVersion,
      role: "customer",
      routes: ["requests"],
    }),
    { schema: sCreateRequest },
    createRequest
  );

  app.delete(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["requests", "reject", ":customerId"],
    }),
    { schema: sRejectRequest },
    rejectRequest
  );
  app.delete(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["customers", ":customerId"],
    }),
    { schema: sRemoveCustomer },
    removeCustomer
  );
  app.delete(
    routeGen({
      version: applicationVersion,
      role: "customer",
      routes: ["requests"],
    }),
    { schema: sRemoveRequest },
    removeRequest
  );
  app.get(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["customers"],
    }),
    { schema: sRetrieveCustomers },
    retrieveCustomers
  );
  app.get(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["requests"],
    }),
    { schema: sRetrieveRequests },
    retrieveRequests
  );
  app.get(
    routeGen({
      version: applicationVersion,
      role: "customer",
      routes: ["providers"],
    }),
    { schema: sRetrieveCustomerProviderInfo },
    retrieveCustomerProviderInfo
  );
  app.get(
    routeGen({
      version: applicationVersion,
      role: "customer",
      routes: ["requests"],
    }),
    { schema: sRetrieveRequestByCustomerId },
    retrieveRequestByCustomerId
  );
}
