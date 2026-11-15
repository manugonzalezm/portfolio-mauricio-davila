// CV (placeholder).
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.';

export const formacion = [
  { periodo: '0000 – 0000', titulo: 'Título', lugar: 'Institución' },
  { periodo: '0000 – 0000', titulo: 'Título', lugar: 'Institución' },
];

export const experiencia = [
  { periodo: '0000 – actualidad', titulo: 'Puesto', lugar: 'Empresa / estudio', texto: lorem },
  { periodo: '0000 – 0000', titulo: 'Puesto', lugar: 'Empresa / estudio', texto: lorem },
  { periodo: '0000 – 0000', titulo: 'Puesto', lugar: 'Empresa / estudio', texto: lorem },
];

// Capacitaciones y certificados. `link` es opcional (para verificar el certificado).
export const capacitaciones = Array.from({ length: 5 }, (_, i) => ({
  anio: 2026 - i,
  titulo: `Nombre de la capacitación ${i + 1}`,
  institucion: 'Institución',
  link: '',
}));

export const herramientas = ['Herramienta 1', 'Herramienta 2', 'Herramienta 3', 'Herramienta 4', 'Herramienta 5'];

export const idiomas = [
  { idioma: 'Idioma 1', nivel: 'Nivel' },
  { idioma: 'Idioma 2', nivel: 'Nivel' },
];
