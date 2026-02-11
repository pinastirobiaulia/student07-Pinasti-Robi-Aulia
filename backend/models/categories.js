const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Categories = sequelize.define("Categories", {
    category_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    photo: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    
}, {
    tableName: "Categories",
    timestamps: false,
    createdAt: false, updatedAt: false 
});

module.exports = Categories;
