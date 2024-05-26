const { select } = require('@evershop/postgres-query-builder');

module.exports.getCustomerRequestBaseQuery = () => {
  const query = select('*').from('customer_request');

  query.select('customer_request.uuid', 'uuid');
  return query;
};
