require("dotenv").config();

const config = {
  dbUser: process.env.DB_USER || "postgres",
  dbPassword: process.env.DB_PASSWORD || "2610",
  dbHost: process.env.DB_HOST || "localhost",
  dbName: process.env.DB_NAME || "dogs",
  port: process.env.API_PORT || "3001",
  host: process.env.API_host || "localhost",
  cors: process.env.CORS || "localhost:3000",
};

module.exports = config;
