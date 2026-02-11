const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Customers = require("./customers");
const Employee = require("./employees");

const Orders = sequelize.define("Orders", {
    order_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    customer_id: {
        type: DataTypes.CHAR,
        allowNull: true,
        references: {
            model: Customers,
            key: "id"
        }
    },
    employee_id: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        references: {
            model: Employee,
            key: "id"
        }
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    required_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    shipped_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    ship_via: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    freight: {
        type: DataTypes.REAL,
        allowNull: true
    },
    ship_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ship_address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ship_city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ship_region: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ship_postalcode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ship_country: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    tableName: "Orders",
    timestamps: false,
    createdAt: false, updatedAt: false 
});

module.exports = Categories;
