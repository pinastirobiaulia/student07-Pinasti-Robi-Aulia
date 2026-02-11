const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Shippers = sequelize.define("Shippers", {
    shipper_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    company_name: {
        type: DataTypes.REAL, 
        allowNull: false,   
    },
    phone: {
        type: DataTypes.REAL, 
        allowNull: true,   
    },
    
}, {
    tableName: "Shippers",
    timestamps: false,
    createdAt: false, updatedAt: false 
});

module.exports = Shippers;
