const { pool } = require('@evershop/evershop/src/lib/postgres/connection');
const { insert } = require('@evershop/postgres-query-builder');

module.exports = async function graphql(request, response, delegate, next) {
  try {
    const {
      body: { customer_name, customer_email, comment }
    } = request;

      console.log(customer_name);

      // Insert the comment into the database
    const review = await insert('customer_request')
      .given({
          customer_email,
        customer_name,
        comment
      })
      .execute(pool);
    response.$body = {
      data: review
    };
    next();
  } catch (error) {
    next(error);
  }
};
