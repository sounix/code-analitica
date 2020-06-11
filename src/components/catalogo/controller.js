module.exports = {
  listaProductos: (req, res) => {
    return res.send("Aqui veras una lista de productos");
  },
  verProducto: (req, res) => {
    res.send(`Aqui veras informacion del producto ${req.params.id}`);
  },
};
