const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Employees = sequelize.define("Employees", {
    employee_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    title_of_courtesy: {
        type: DataTypes.STRING,
        allowNull: true
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    hire_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    region: {
        type: DataTypes.STRING,
        allowNull: true
    },
    postal_code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    home_phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    extension: {
        type: DataTypes.STRING,
        allowNull: true
    },
    photo: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    reports_to: {
        type: DataTypes.SMALLINT, 
        allowNull: true           
    },
    photo_path: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
}, {
    tableName: "Employees",
    timestamps: false,
    createdAt: false, updatedAt: false 
});

module.exports = Employees;
