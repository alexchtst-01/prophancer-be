import { Sequelize } from "sequelize";
import db from "./db.js";

const { DataTypes } = Sequelize;

const prophancerModel = db.define(
  "ProphancerData",
  {
    propcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    propname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    propvalue: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    proptime: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { timestamps: false, freezeTableName: true }
);

export default prophancerModel;
