const EXPRESS = require ("express"); 
let productosController = require('../controllers/productosController.js');

var ROUTER = EXPRESS.Router();
ROUTER.get('/detalle/:id', productosController.detalle);
module.exports = ROUTER;