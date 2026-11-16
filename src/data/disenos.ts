// "Mis diseños": proyectos propios no construidos. Imágenes en src/assets/disenos/ (ej. imagen: 'disenos/diseno-01.jpg').
export type TipoDiseno = 'Investigación' | 'Ideas';

export interface Diseno {
  titulo: string;
  tipo: TipoDiseno;
  anio: number;
  descripcion: string;
  imagen?: string;
  formato?: '4 / 3' | '3 / 4' | '1 / 1' | '16 / 9';
  distincion?: string;
}

const tipos: TipoDiseno[] = ['Investigación', 'Ideas'];
const formatos: Diseno['formato'][] = ['3 / 4', '4 / 3', '16 / 9', '1 / 1', '4 / 3', '3 / 4'];

export const disenos: Diseno[] = formatos.map((formato, i) => ({
  titulo: `Diseño ${String(i + 1).padStart(2, '0')}`,
  tipo: tipos[i % 2],
  anio: 2026 - i,
  descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  formato,
  distincion: i === 0 ? 'Distinción' : undefined,
}));

export const tiposDiseno = tipos;
