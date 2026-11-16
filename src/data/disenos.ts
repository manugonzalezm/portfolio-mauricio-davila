// "Mis diseños": investigación e ideas no construidas.
// Cada diseño genera su página en /mis-disenos/<slug>/.
// Imágenes en src/assets/disenos/<slug>/ (ej. portada: 'disenos/diseno-01/portada.jpg').
export type TipoDiseno = 'Investigación' | 'Ideas';

export interface Diseno {
  slug: string;
  titulo: string;
  tipo: TipoDiseno;
  anio: number;
  contexto: string;        // ej. 'FADU — UBA', 'Proyecto personal', 'Concurso'
  resumen: string;         // texto corto para la grilla y el encabezado
  descripcion: string[];   // párrafos del detalle
  portada?: string;
  imagenes?: string[];
  formato?: '4 / 3' | '3 / 4' | '1 / 1' | '16 / 9'; // forma de la imagen en la grilla
  distincion?: string;
}

const tipos: TipoDiseno[] = ['Investigación', 'Ideas'];
const formatos: NonNullable<Diseno['formato']>[] = ['3 / 4', '4 / 3', '16 / 9', '1 / 1', '4 / 3', '3 / 4'];

export const disenos: Diseno[] = formatos.map((formato, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    slug: `diseno-${n}`,
    titulo: `Diseño ${n}`,
    tipo: tipos[i % 2],
    anio: 2026 - i,
    contexto: 'Contexto',
    resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    descripcion: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    ],
    formato,
    distincion: i === 0 ? 'Distinción' : undefined,
  };
});

export const tiposDiseno = tipos;
