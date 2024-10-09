import { model, Schema } from 'mongoose';

const MusicaSchema = new Schema({
  titulo: {
    type: String,
    required: [true, 'El titulo es obligatorio'],
    minlength: [10, 'El titulo debe tener al menos 10 caracteres'],
    maxlength: [255, 'El titulo no puede tener más de 255 caracteres']
  },
  artista: {
    type: String,
    required: [true, 'El artista es obligatorio'],
    minlength: [10, 'El artista debe tener al menos 10 caracteres'],
    maxlength: [255, 'El artista no puede tener más de 255 caracteres']
  },
  anho_lanzamiento: {
    type: String,
    required: [true, 'El año de lanzamiento es obligatorio'],
    match: [/^\d{4}$/, 'El año de lanzamiento debe tener 4 caracteres']
  },
  genero: {
    type: String,
    required: [true, 'El género es obligatorio']
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Musica = model('Musica', MusicaSchema);

export default Musica;
