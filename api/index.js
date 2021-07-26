const app = require("./src/server");
const config = require("./lib/config");
const { conn } = require("./src/db");

conn.sync({ force: true }).then(() => {
  console.log("database conected");
  app.listen(config.port, function () {
    console.log(`App is listening on port ${config.port}`);
  });
});
