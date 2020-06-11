const { QueryTypes } = require("sequelize");
const { dbmssql } = require("../../services");

const SERVIDOR_DB = "mssql://user:pass@host:port/dbname";

module.exports = {
  listaProductos: async () => {
    try {
      const db = dbmssql(SERVIDOR_DB);
      const response = await db.query(
        "SELECT TOP 500 Articulo,CodigoBarras,Nombre,FactorCompra,FactorVenta FROM Articulos",
        { type: QueryTypes.SELECT }
      );
      return response;
    } catch (e) {
      return null;
    }
  },
};
