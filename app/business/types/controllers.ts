import { types } from "aba-node";

interface IPostConfirmRequest {
  Body: {
    customerId: string;
  };
}

export type tPostConfirmRequest = types.tRequest<IPostConfirmRequest>;

interface IPostCreateRequest {
  Body: {
    staffId: string;
  };
}

export type tPostCreateRequest = types.tRequest<IPostCreateRequest>;

interface IDeleteRejectRequest {
  Params: {
    customerId: string;
  };
}

export type tDeleteRejectRequest = types.tRequest<IDeleteRejectRequest>;

interface IDeleteRemoveCustomer {
  Params: {
    customerId: string;
  };
}

export type tDeleteRemoveCustomer = types.tRequest<IDeleteRemoveCustomer>;
