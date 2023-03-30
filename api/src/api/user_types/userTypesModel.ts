import { DataTypes } from 'sequelize';

import sequelize from '../../db';

const UserType = sequelize.define(
  'user_type',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_type_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'user_types',
    timestamps: false,
    underscored: true,
  }
);

export default UserType;
