import { Router } from 'express';
import controllerMusica from '../controladores/controllerMusica.js';

const rutaMusica = Router();

rutaMusica.get('/listar', controllerMusica.obtenerMusica);
rutaMusica.post('/nuevo', controllerMusica.crearMusica); 
rutaMusica.get('/buscar/:id', controllerMusica.obtenerMusicaById); 
rutaMusica.put('/:id', controllerMusica.actualizarMusica);
rutaMusica.delete('/:id', controllerMusica.eliminarMusica);

export default rutaMusica;
