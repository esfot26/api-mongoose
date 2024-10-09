import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import conectarDB from './server/config/config.js'; // Asegúrate de incluir .js
import rutaMusica from './server/rutas/rutaMusica.js'; 

dotenv.config(); // Para cargar las variables de entorno desde .env

const app = express();
const PORT = process.env.PORT || 3000;

conectarDB();

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Habilitar CORS

// Usar las rutas de música
app.use('/api/musica', rutaMusica);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
