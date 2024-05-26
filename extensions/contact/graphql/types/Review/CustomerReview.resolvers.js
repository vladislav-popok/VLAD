const { buildUrl } = require('@evershop/evershop/src/lib/router/buildUrl');
const { camelCase } = require('@evershop/evershop/src/lib/util/camelCase');
const { select } = require('@evershop/postgres-query-builder');
const { ReviewCollection } = require('../../../services/CustomerRequestCollection');
const {
  getCustomerRequestBaseQuery
} = require('../../../services/getCustomerRequestBaseQuery');

module.exports = {
  Query: {
    reviews: async (_, { filters }, { user }) => {
      const query = getCustomerRequestBaseQuery();
      const root = new ReviewCollection(query);
      await root.init(filters, !!user);
      return root;
    }
  },
  Review: {
    approveApi: async ({ uuid }) => buildUrl('approveReview', { id: uuid }),
    deleteApi: async ({ uuid }) => buildUrl('deleteReview', { id: uuid }),
    unApproveApi: async ({ uuid }) => buildUrl('unApproveReview', { id: uuid }),
  }
};
