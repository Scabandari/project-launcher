import { DataTypes } from 'sequelize';

import db from '../../db';
import User from './userModel'; // import the User model

const Profile = db.define(
  'profile',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    bio: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE(3),
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE(3),
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'profiles',
    underscored: true,
    raw: true,
  }
);

// Define the associations
Profile.belongsTo(User, { foreignKey: 'user_id' });
User.hasOne(Profile, { foreignKey: 'user_id' });

export default Profile;
