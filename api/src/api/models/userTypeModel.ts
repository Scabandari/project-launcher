import { DataTypes } from 'sequelize';

import db from '../../db';

const UserType = db.define(
  'user_type',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userTypeName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'user_type_name',
    },
  },
  {
    tableName: 'user_types',
    timestamps: false,
    underscored: true,
    raw: true,
  }
);

export default UserType;
