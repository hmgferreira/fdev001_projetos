import express from 'express';
import ClientesController from '../controllers/ClientesController.js';

const clientesRoutes = express.Router();

const clientesController = new ClientesController();
// UsuariosRoutes.use(function(request, response, next) {
//     console.log("Eu sou o MIddleware do Usuarios")
//     next();
// })
clientesRoutes.get('/clientes', clientesController.findAll);
clientesRoutes.get('/clientes/:id', clientesController.findOne);
clientesRoutes.post('/clientes', clientesController.create);
clientesRoutes.put('/clientes/:id', clientesController.update);
clientesRoutes.delete('/clientes/:id', clientesController.delete);

export default clientesRoutes;