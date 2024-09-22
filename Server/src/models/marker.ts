import  { DataTypes } from 'sequelize';
import db from '../db/connection';

const Marker = db.define('Marker', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre:{  
    type: DataTypes.STRING      
  },  
  lat: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  lng: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }              
}, {
  tableName: 'markers',
  createdAt: false,
  updatedAt: false
});

export default Marker;