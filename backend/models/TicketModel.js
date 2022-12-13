import { Sequelize } from "sequelize";
import db from "../Config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Tickets = db.define('tickets',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    request:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty:true,
        }
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty:true,
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty:true,
        }
    },
},{
    freezeTableName: true
});

Users.hasMany(Tickets);
Tickets.belongsTo(Users, {foreignKey: 'userId'});

export default Tickets;