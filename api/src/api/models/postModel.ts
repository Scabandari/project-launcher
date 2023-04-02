import { DataTypes } from 'sequelize';

import db from '../../db';
import User from './userModel'; // import the User model

const Post = db.define('post', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  published: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

// Define the associations
Post.belongsTo(User, { foreignKey: 'author_id' });
User.hasMany(Post, { foreignKey: 'author_id' });

module.exports = Post;
