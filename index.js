import express from "express";
import { sequelize } from "./database/database.js";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await sequelize.authenticate(), console.log("DB Conectada");
    console.log(`App listen on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
