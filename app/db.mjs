import { Sequelize } from "sequelize";
import userModel from "./models/user.model.mjs";

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = userModel(db);

export default db;
