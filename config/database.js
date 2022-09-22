import { Sequelize } from "sequelize";
 
const db = new Sequelize('ktp', 'steven', 'steven', {
    host: 'infra-mysqldb-1',
    dialect: 'mysql',
    port: 3306
});

export default db;