// This is the Config for Connecting to The mLab Database
// this process.env.DB_USER is for calling the variables in Heroku

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

module.exports = {

    mongoDbUrl: `mongodb://${user}:${password}@ds149404.mlab.com:49404/company`

};