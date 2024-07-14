const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');

class Feedback extends Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,  // Ensures the email is in a valid format
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // Foreign key for the student
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'students',  // This is the table name
          key: 'id',          // the column in the referenced table
        },
      },
      // Foreign key for the course
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'courses',  // This is the table name
          key: 'id',          // the column in the referenced table
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, {
      sequelize,
      modelName: 'Feedback',
      tableName: 'feedbacks',
    });
  }
}

module.exports = Feedback;
