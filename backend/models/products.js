const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Supplier = require("./suppliers");
const Categories = require("./categories");

const Products = sequelize.define("Products", {
    product_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    supplier_id: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        references: {
            model: Supplier,
            key: "id"
        }
    },
    category_id: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        references: {
            model: Categories,
            key: "id"
        }
    },
    quantity_per_unit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit_price: {
        type: DataTypes.REAL, 
        allowNull: true,    
        validate: {
            isFloat: true,     
            min: 0              
        }
    },
    units_in_stock: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    units_on_order: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    reorder_level: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    discontinued: {
        type: DataTypes.INTEGER, 
        allowNull: true,    
    },
    
}, {
    tableName: "Products",
    timestamps: false,
    createdAt: false, updatedAt: false 
});

module.exports = Products;
