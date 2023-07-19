import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config';

interface NoteAttributes {
  id: string;
  title: string;
  text?: string;
}

export class NoteInstance extends Model<NoteAttributes> {}

NoteInstance.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: 'notes',
  }
);
