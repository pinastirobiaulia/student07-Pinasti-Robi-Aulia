const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Categories = sequelize.define("Categories", {
    category_id: {
        type: DataTypes.SMALLINT,
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
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fax: {
        type: DataTypes.STRING,
        allowNull: true
    },
    homepage: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    
}, {
    tableName: "Categories",
    timestamps: false,
    createdAt: false, updatedAt: false 
});

module.exports = Categories;
