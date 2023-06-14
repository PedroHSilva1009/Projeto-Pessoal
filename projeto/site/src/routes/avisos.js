var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar/:idBanda", function (req, res) {
    avisoController.listar(req, res);
});
router.get("/listarPct/:idBanda", function (req, res) {
    avisoController.listarPct(req, res);
});
router.get("/listarShow/:idBanda", function (req, res) {
    avisoController.listarShow(req, res);
});
router.get("/listarPBandas", function (req, res) {
    avisoController.listarG(req, res);
});
router.get("/postar", function (req, res) {
    avisoController.postar(req, res);
});
router.get("/escolherBanda/:id", function (req, res) {
    avisoController.escolher(req, res);
});
router.get("/listarBandas", function (req, res) {
    avisoController.listarPorBanda(req, res);
});
router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario/:idBanda", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;