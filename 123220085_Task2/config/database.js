import { Sequelize } from "sequelize";

const db = new Sequelize("tccnotes", "root", "", {
    host: "localhost",
    dialect: "mysql",
})

export default db