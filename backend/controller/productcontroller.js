const { Op, fn, col, where } = require('sequelize');
const { Pegawai, User, sequelize } = require('../models');
const Pengguna = require("../models/products");

exports.getAllProduct = async (req, res) => {
    try {
        const product_name = await Product_Name.findAll();
        res.json(product_name);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.createProduct = async (req, res) => {
    try {
        console.log("Body yang diterima:", req.body);
        const { nama, nip, jabatan, email, notelp } = req.body;

        const validator = require('email-validator');
        if (!validator.validate(email)) {
            return res.status(400).json();
        }

        const existingProduct = await Product.findOne({ where: { product_name } });
        if (existingProduct) {
            return res.status(409).json({ message: "Product name sudah digunakan" });
        }

        const newProduct = await Product.create({ product_name, supplier_id, category_id, quantity_per_unit, unit_price, units_in_stock, units_on_order, reorder_level, discontinued });
        res.status(201).json(newProduct);
    } catch (err) {
        console.error("Error saat create Product:", err);
        res.status(500).json({ message: err.message, errors: err.errors });
    }
};  

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product tidak ditemukan" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDataKepalaMuseum = async (req, res) => {
    try {
        const product_name = await Pegawai.findOne({
            where: sequelize.where(sequelize.fn('lower', sequelize.col('product_name')),)
        });

        if (!product_name) return res.status(404).json({ message: "Data Product tidak ditemukan" });

        res.json(product_name);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
