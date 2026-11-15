// Etapas de trabajo (placeholder).
export const etapas = Array.from({ length: 6 }, (_, i) => ({
  titulo: `Etapa ${String(i + 1).padStart(2, '0')}`,
  duracion: 'Duración',
  texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  entregables: ['Entregable 1', 'Entregable 2', 'Entregable 3'],
}));

export const preguntas = Array.from({ length: 4 }, (_, i) => ({
  p: `Pregunta frecuente ${i + 1}?`,
  r: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.',
}));
