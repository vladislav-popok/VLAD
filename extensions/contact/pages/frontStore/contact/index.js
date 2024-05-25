// eslint-disable-next-line no-unused-vars
const {setContextValue} = require("../../../../../modules/graphql/services/contextHelper");
module.exports = (request, response) => {
    setContextValue(request, 'pageInfo', {
        title: 'Contact',
        description: "Contact"
    });
};
