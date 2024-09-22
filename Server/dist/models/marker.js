"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Marker = connection_1.default.define('Marker', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    lat: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    lng: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    tableName: 'markers',
    createdAt: false,
    updatedAt: false
});
exports.default = Marker;
