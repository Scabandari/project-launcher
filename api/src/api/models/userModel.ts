import { Sequelize, DataTypes } from 'sequelize';

import UserType from '../user_types/userTypesModel';
import db from '../../db';

const User = db.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_type_id',
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()'),
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()'),
      field: 'updated_at',
    },
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  }
);

User.belongsTo(UserType, { foreignKey: 'user_type_id' });

export default User;
