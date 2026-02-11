const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Products = require("./products");

const Order_Details = sequelize.define("Order_Details", {
    order_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: Product,
            key: "id"
        }
    },
    unit_price: {
        type: DataTypes.REAL, 
        allowNull: false,    
        validate: {
            isFloat: true,     
            min: 0              
        }
    },
    quantity: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    unit_price: {
        type: DataTypes.REAL, 
        allowNull: false,    
        validate: {
            isFloat: true,     
            min: 0              
        }
    },
    
}, {
    tableName: "Order_Details",
    timestamps: false,
    createdAt: false, updatedAt: false 
});

module.exports = Order_Details;
