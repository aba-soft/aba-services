import { queryGen } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "customers",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "customer_id", self: true })],
  });
  return query;
}

export function buildFindProviderByCustomerId(
  args: adaptersTypes.IBuildFindCustomer
) {
  const { select, rowToCustomer } = args;
  const errorPath = "business, adapters, find provider by customer id";
  const query = selectQueryGen();
  return async function findProviderByCustomerId(
    customerId: string
  ): Promise<entityTypes.IMadeCustomersObject | undefined> {
    const result = await select({
      query,
      params: { customer_id: customerId },
      unique: false,
      queryOptions: undefined,
      errorPath,
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    if (result.rowLength === 1) {
      const customer = rowToCustomer(result.first());
      if (customer.softDeleted || !customer.requestConfirmed) {
        return undefined;
      }
      return customer;
    }
    const customers: entityTypes.IMadeCustomersObject[] = [];
    for (let index = 0; index < result.rowLength; index++) {
      const row = result.rows[index];
      if (row.get("soft_deleted")) {
        continue;
      }
      customers.push(rowToCustomer(row));
    }
    if (customers.length === 1) {
      return customers[0];
    }
    console.warn("customer can have only one provider");
    console.log(JSON.stringify(customers, null, 2));
    return undefined;
  };
}
