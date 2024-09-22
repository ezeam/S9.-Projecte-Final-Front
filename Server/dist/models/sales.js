"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
class Sale extends sequelize_1.Model {
}
Sale.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    mes: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    importe: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize: connection_1.default,
    modelName: 'Sale',
    tableName: 'sales',
    timestamps: false
});
exports.default = Sale;
