import mongoose from 'mongoose';
import Musica from '../modelos/modeloMusica.js';

const controllerMusica = {

  crearMusica: async (req, res) => {
    try {
      const {titulo, artista, anho_lanzamiento, genero} = req.body;
      if (!titulo || !artista || !anho_lanzamiento || !genero) {
        return res.status(400).json({ error: 'Faltan datos' });
      }
      const nuevaMusica = await Musica.create(req.body);
      return res.status(201).json(nuevaMusica);
    } catch (error) {
      return res.status(400).json({ error: 'Error al crear la música' });
    }
  },

  obtenerMusica: async (req, res) => {
    try {
      const musica = await Musica.find();
      res.json(musica);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las músicas' });
    }
  },

  obtenerMusicaById: async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID no válido' });
      }
      const musica = await Musica.findById(id);
      if (!musica) {
        res.status(404).json({ mensaje: "Música no encontrada" });
        return;
      }
      res.json(musica);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener la música' });
    }
  },

  actualizarMusica: async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID no válido' });
      }
      const musicaActualizada = await Musica.findByIdAndUpdate(id, req.body, { new: true });
      if (!musicaActualizada) {
        res.status(404).json({ mensaje: "Música no encontrada" });
        return;
      }
      res.json(musicaActualizada);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error al actualizar la música' });
    }
  },

  eliminarMusica: async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID no válido' });
      }
      const musicaEliminada = await Musica.findByIdAndDelete(id);
      if (!musicaEliminada) {
        res.status(404).json({ mensaje: "Música no encontrada" });
        return;
      }
      res.json({ mensaje: "Música eliminada correctamente" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error al eliminar la música' });
    }
  }
};

export default controllerMusica;
