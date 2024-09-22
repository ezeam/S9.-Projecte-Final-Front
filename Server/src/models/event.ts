import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';

class Event extends Model {
  public id!: number;
  public from!: string;
  public to!: string;
}

Event.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  from: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  to: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Event',
  tableName: 'events',
  timestamps: false,
});

export default Event;
