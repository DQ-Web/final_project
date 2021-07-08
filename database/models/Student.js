const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://347xj63da3uu3x11jfmmklg9-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/7.png",
  },
  gpa: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Student;
