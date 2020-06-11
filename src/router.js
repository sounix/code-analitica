const express = require("express");
const router = express.Router();

const catalogoController = require("./components/catalogo/controller");

router.get("/", (req, res) => {
  res.send("Bienvenido a Code Analitca 2020");
});

router.get("/api/v1/catalogo", catalogoController.listaProductos);

router.get("/api/v1/catalogo/:id", catalogoController.verProducto);

module.exports = router;
