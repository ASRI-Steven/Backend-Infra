import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";

const User = db.define('user', {
    nik: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING
    },
    tempat: {
        type: DataTypes.STRING
    },
    tanggal_lahir: {
        type: DataTypes.DATEONLY
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

export default User;