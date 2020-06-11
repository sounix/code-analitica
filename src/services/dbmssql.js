const Sequelize = require("sequelize");

module.exports = (cadenaConexion) => {
  return new Sequelize(cadenaConexion, {
    pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
    dialectOptions: {
      options: {
        useUTC: false,
        dateFirst: 1,
        enableArithAbort: true,
        trustServerCertificate: true,
      },
    },
    define: { timestamps: false },
  });
};
