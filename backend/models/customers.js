const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Customers = sequelize.define("Customers", {
    customer_id: {
        type: DataTypes.CHAR(10),
        primaryKey: true,
        autoIncrement: true
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contact_title: {
        type: DataTypes.STRING,
        allowNull: true
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
        type: DataTypes.INTEGER,
        allowNull: true
    },
    country: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fax: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
}, {
    tableName: "Customers",
    timestamps: false,
    createdAt: false, updatedAt: false 
});

module.exports = Customers;
