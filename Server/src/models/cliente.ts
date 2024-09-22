import  { DataTypes } from 'sequelize';
import db from '../db/connection';

const Cliente = db.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dni:{
    type: DataTypes.STRING
  },
  nombre:{  
    type: DataTypes.STRING      
  },  
  apellido:{  
    type: DataTypes.STRING      
  },
  ciudad:{  
    type: DataTypes.STRING      
  },
  email:{  
    type: DataTypes.STRING      
  },
  telefono:{  
    type: DataTypes.STRING      
  },              
}, {
  createdAt: false,
  updatedAt: false
});

export default Cliente;