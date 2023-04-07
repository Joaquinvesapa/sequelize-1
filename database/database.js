import dotevn from "dotenv";
import { Sequelize } from "sequelize";
dotevn.config();

export const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PSW,
  {
    dialect: "mssql",
    port: process.env.DB_PORT,
  }
);
