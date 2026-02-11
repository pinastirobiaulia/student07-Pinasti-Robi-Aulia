const { Sequelize } = require('sequelize');

const db = new Sequelize('northwind_student07', 'student07', 'pass07', {
    host: 'localhost',
    dialect: 'postgresql',
    logging: false, 
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Koneksi ke PostgreSQL berhasil.');
  } catch (error) {
    console.error('❌ Gagal konek ke database:', error.message);
  }
})();

module.exports = sequelize;

// module.exports = db;