const model = require("./model");

module.exports = {
  listaProductos: async (req, res) => {
    const response = await model.listaProductos();

    const result = response.map((item) => {
      return {
        ...item,
        Relacion: `${item.FactorCompra}/${item.FactorVenta}`,
      };
    });

    return res.send({ data: result });
  },
  verProducto: (req, res) => {
    res.send(`Aqui veras informacion del producto ${req.params.id}`);
  },
};
