const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

module.exports = {

    mongoDbUrl: `mongodb://${user}:${password}@ds149404.mlab.com:49404/company`

};